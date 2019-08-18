# Laravel: greatest-n-per-group(檢索每個User的最新記錄)

**User** table:

| id |       name | age |
|----|------------|-----|
|  1 |      Apple |  22 |
|  2 | Strawberry |  23 |
|  3 |     Orange |  50 |
|  4 |      Mango |  30 |

**Memberships** table:

| id | user_id |            expire_at |
|----|---------|----------------------|
|  1 |       1 | 2019-08-17T11:19:30Z |
|  2 |       1 | 2019-08-10T11:20:10Z |
|  3 |       2 | 2019-08-29T11:20:19Z |
|  4 |       3 | 2019-08-02T11:20:30Z |
|  5 |       3 | 2019-08-28T11:20:40Z |


-------
## Problom
**I want select users with the latest 'expire_at'.**

After reference: https://stackoverflow.com/a/2111420/5588637,
I tried the following: 

```sql
SELECT
	u.*,
	m1.* 
FROM
	users u
	INNER JOIN memberships m1 ON u.id = m1.user_id
	LEFT JOIN memberships m2 ON u.id = m2.user_id 
	AND ( 
		m1.expire_at < m2.expire_at 
		OR m1.expire_at = m2.expire_at 
		AND m1.id < m2.id 
		) 
WHERE
	m2.id IS NULL;
```

### Result

> The `id` will appear twice because I used to `join`.

| id |       name | age | id | user_id |            expire_at |
|----|------------|-----|----|---------|----------------------|
|  1 |      Apple |  22 |  1 |       1 | 2019-08-17T11:19:30Z |
|  2 | Strawberry |  23 |  3 |       2 | 2019-08-29T11:20:19Z |
|  3 |     Orange |  50 |  5 |       3 | 2019-08-28T11:20:40Z |


After change  `m1.*` to `m1.expire_at`. I got the result I want.

| id |       name | age |            expire_at |
|----|------------|-----|----------------------|
|  1 |      Apple |  22 |  2019-08-17T11:19:30Z|
|  2 | Strawberry |  23 | 2019-08-29T11:20:19Z |
|  3 |     Orange |  50 | 2019-08-28T11:20:40Z |


-------

## Implement in Lavavel

> Laravel Framework version: 5.6.39

I am trying to convert the above SQL into Laravel using [Database: Query Builder](https://laravel.com/docs/5.8/queries).

```php
$users = DB::table('users as u')
            ->select('u.*', 'm1.*')
            ->join('memberships as m1','u.id','=','m1.user_id')
            ->leftJoin('memberships as m2', function($join){
                $join->on('u.id', '=', 'm2.user_id')
                ->where(function ($query) {
                    $query->where('m1.expire_at','<','m2.expire_at')
                    ->orWhere('m1.expire_at','=','m2.expire_at')
                    ->where('m1.id','<','m2.id');
                });
            })
            ->whereNull('m2.id')
            ->toSQL();
```
> I'm using `toSql()`. This will convert it to SQL first  to make sure it's same of above SQL.

```sql
SELECT
	`u`.*,
	`m1`.* 
FROM
	`users` AS `u`
	INNER JOIN `memberships` AS `m1` ON `u`.`id` = `m1`.`user_id`
	LEFT JOIN `memberships` AS `m2` ON `u`.`id` = `m2`.`user_id` 
	AND (
		`m1`.`expire_at` < ? 
		OR `m1`.`expire_at` = ? 
		AND `m1`.`id` < ?
		) 
WHERE
	`m2`.`id` IS NULL
```

> `?` seems to be the characteristic of laravel, I believe it is same of above SQL.

when i change `toSQL()` to `get()`, the result following: 

```shell
Collection { ▼
  #items: []
}
```

The above result is wrong, so i tried **remove** 
` whereNull('m2.id')` in Laravel code  (`WHERE m2.id IS NULL` in SQL), let’s see what happened.

**Laravel result**
```sql
Collection { ▼
  #items: array:5 [▼
    0 => { ▼
      +"id": 1
      +"name": "Apple"
      +"age": "Eric Yiu SL"
      +"user_id": 1
      +"expire_at": "2019-08-10T11:20:10Z"
    }
    ...
]
```

**Ideal result**

| id |       name | age | id | user_id |            expire_at |
|----|------------|-----|----|---------|----------------------|
|  1 |      Apple |  22 |  2 |       1 | 2019-08-10T11:20:10Z |
|  3 |     Orange |  50 |  4 |       3 | 2019-08-02T11:20:30Z |
|  1 |      Apple |  22 |  1 |       1 | 2019-08-17T11:19:30Z |
|  2 | Strawberry |  23 |  3 |       2 | 2019-08-29T11:20:19Z |
|  3 |     Orange |  50 |  5 |       3 | 2019-08-28T11:20:40Z |


Comparing results, **Laravel result** missing second id which is memberships table id, i guess this is the reason of incorrect results.

I have searched the Internet, seems is this problem.
https://github.com/laravel/framework/issues/4962

But I failed after various attempts...

## Finally
Finally, I asked online, I hope someone answered.
- https://stackoverflow.com/q/57544848/5588637
- https://github.com/laravel/framework/issues/29625#issue-481992263
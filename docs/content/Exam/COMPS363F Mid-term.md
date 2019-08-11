# COMPS363F Mid-term

### Atoms
> 照字典咁排

```erlang
%% z 係大過a-y開頭既任何野
> z > a.
true

%% must begin with lowercase characters
> Zzzz.
variable 'Zzzz' is unbound

%% Characters _ and @ are allowed
> z > asd____fghjklwerty@@uicvbnm.
true
```

### Tuples `{ }`


```erlang
> { 1, 2.0, { three, 4 } }.
{1,2.0,{three,4}}

> tuple_size{ 1, 2.0, { three, 4 } }
3

> element(1,{ 1, 2.0, { three, 4 } }).
1

% The 3rd item in the tuple is itself a tuple.
> element(3,{ 1, 2.0, { three, 4 } }).
{three,4}

% setelement(Index, Tuple1, Value) -> Tuple2
> setelement(3, { 1, 2.0, { three, 4 } }, 3).
{1,2.0,3}

% Tuples can be compared too
> {z,b} > {z,a}.
true
```

### Lists `[ ]`

> Lists are designed for efficient updates but tuples are not.

```erlang
> [1,2.0,3].
[1,2.0,3]

% Just like tuples, items in lists can be of different kinds.
> [1,2.0,{three,4}].
[1,2.0,{three,4}]

% List Construction with |
> [1,2,3|[four,five]].
[1,2,3,four,five]

> [a,b,c] ++ [d,e].
[a,b,c,d,e]

> [a,b,c,d,e] -- [a,b].
[c,d,e]
```

### Single Assignment Variables

```erlang
> Two = 2.
2

%starts with an upper case character
> three = 3.
** exception error: no match of right hand side value 3

% only can be assigned once
> Two = two.
** exception error: no match of right hand side value two

% forget variable
> f(Two).
ok

% "Two" can be assigned since used forget function
> Two = two.
two
```

### Recursive vs Tail-Recursive


```erlang
% Recursive
sum([]) -> 0;
sum([Head | Tail]) -> Head + sum(Tail).
```

```shell
sum([10,20,30])
[10 | [20,30] ] -> 10 + sum([20,30])
                    -> 20 + sum([30])
                        -> 30 + sum([])
                            -> 0
                -> 10 + 20 + 30 + 0
                    -> 60
```

```erlang
% Tail-Recursive_
sum([],Sum) -> Sum;
sum([Head|Tail],Sum) -> sum(Tail, Head+Sum).
```


```shell
sum([10,20,30])
sum([10 | [20,30] ], 0) -> sum( [20,30], 10+0 )
sum([20| [30] ], 10) -> sum( [30], 20+10 )
sum([30 | [] ], 30) -> sum( [], 30+30 )
sum([],60) -> 60
```

### List Comprehension


```erlang
% "X > 3" 個part係條件句，如果 List item > 3 先return 個item 去 X
> [X || X <- [1,2,a,3,4,b,5,6], X > 3].
[a,4,b,5,6]
```


```erlang
% Generators can be combined. For example, the Cartesian product of two lists can be written as follows:
> [{X, Y} || X <- [1,2,3], Y <- [a,b]].
[{1,a},{1,b},{2,a},{2,b},{3,a},{3,b}]
```

### Message passing

```erlang
-module(area_process).
-export([area/0]).

area() ->
  receive
    {square, Side} -> 
      io:format("Area of square is ~p~n", 
                [Side * Side]),
                
    {circle, Radius} -> 
      io:format("Area of circle is ~p~n", 
                [math:pi() * Radius * Radius]),
                
    {triangle, A, B, C} -> 
      S = (A + B + C)/2,
      io:format("Area of triangle is ~p~n", 
                [math:sqrt(S*(S-A)*(S-B)*(S-C))]),
                
    Other ->
      io:format("Cannot calculate the area of ~p~n", 
                [Other]),
                
  end.
  area()
```


```erlang
> Pid = spawn(area_process, area, []).
<0.78.0>
> Pid ! {square , 5}.
Area of square is 25
```

### Record


```erlang
-module(record1).
-compile(export_all).

-record(robot, {name,
                type=industrial,
                hobbies,
                details=[]}).

first_robot() ->
    #robot{name="Mechatron",
           type=handmade, 
           details=["Moved by a small man inside"]}.
```


```erlang
% read record information from File (wildcards allowed)
> rr(record1).
[robot]

> Mr = record1:first_robot().
#robot{name = "Mechatron",type = handmade,
       hobbies = undefined,
       details = ["Moved by a small man inside"]}

> Mr#robot.name.
"Mechatron"
```
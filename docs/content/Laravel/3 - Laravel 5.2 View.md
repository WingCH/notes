# 3 - Laravel 5.2 View

> 參考：Larvel 5 實務專題範例教學

#### 原始做法
> resource/views/board.php

```php
<!DOCTYPE html>
<html>
<head>
	<title>排行榜</title>
	<meta charset="utf-8">
	<!-- asset -> public -->
	<!-- public/bower -->
	<link rel="stylesheet" type="text/css" href="<?php echo asset('bower/bootstrap/dist/css/bootstrap.min.css'); ?>"/>
	<script type="text/javascript" src="<?php echo asset('bower/jquery/jquery-3.2.1.js'); ?>"></script>
	<script type="text/javascript" src="<?php echo asset('bower/bootstrap/dist/js/bootstrap.min.js'); ?>"></script>
</head>
<body>
	<nav class="nav nav-default navbar-fixed-top">
		<div class="container">
			<a class="navbar-brand" href="<?php echo url('/'); ?>">HelloLaravel</a>
			<ul class="nav navbar-nav">
				<li>
					<a href="<?php echo url('/board'); ?>">排行榜</a>
				</li>
			</ul>
		</div>
	</nav>
	<div style="padding-top: 70px"></div>
	<div class="container">
		<div class="page-header">
			<h1>排名</h1>
		</div>
		<div class="row">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>名次</th>
						<th>學校</th>
						<th>姓名</th>
						<th>國文</th>
						<th>英文</th>
						<th>數學</th>
						<th>總分</th>
						<th>動作</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>s1234567890</td>
						<td>小明</td>
						<td>60</td>
						<td>60</td>
						<td>60</td>
						<td>180</td>
						<td><a class="btn btn-default btn-sm" href="<?php echo route('student',['student_no'=>'s1234567890']) ?>">查看學生資料</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>
```

> app/Http/routes.php

```php
Route::get('/', 'MyHomeController@index');
Route::get('/board', 'MyHomeController@board');

Route::pattern('student_no', 's[0-9]{10}'); //條件 正則表達式 Regex
Route::group(['prefix' => 'student'], function () {
    Route::get('{student_no}', [
        'as'   => 'student',
        'uses' => 'StudentController@getStudentData',
    ]);
});
```

-------

## Blade樣版引擎

> 可以輕易切割視圖為不同的部份,也可以簡化資料傳遞的過程

###### 將`board.php`轉為用Blade樣版引擎的做法

首先`board.php`分為三部份

* header 導入 js css
* navbar 導航列 因為每頁也要用到 所以分拆出來
* content 內容

**Blade樣版的檔案均以`*.blade.php`命名**

> 全部檔案放在/resources/views

###### /partial/head.blade.php

```php
<meta charset="utf-8">
	<!-- asset -> public -->
	<!-- public/bower -->
	<link rel="stylesheet" type="text/css" href="<?php echo asset('bower/bootstrap/dist/css/bootstrap.min.css'); ?>"/>
	<script type="text/javascript" src="<?php echo asset('bower/jquery/jquery-3.2.1.js'); ?>"></script>
	<script type="text/javascript" src="<?php echo asset('bower/bootstrap/dist/js/bootstrap.min.js'); ?>"></script>

```

###### /partial/nav.blade.php

```php
<nav class="nav nav-default navbar-fixed-top">
		<div class="container">
			<a class="navbar-brand" href="<?php echo url('/'); ?>">HelloLaravel</a>
			<ul class="nav navbar-nav">
				<li>
					<a href="<?php echo url('/board'); ?>">排行榜</a>
				</li>
			</ul>
		</div>
	</nav>
	<div style="padding-top: 70px"></div>
```

###### /layouts/master.blade.php
這個File是用來接合`head.blade.php`和`nav.blade.php`


```php
<!DOCTYPE html>
<html>
<head>
	<title>@yield('title')</title>
	@section('head')
		@include('partial.head')  {{-- /partial/head.blade.php --}}
	@show
</head>
<body>
	@include('partial.nav')    {{-- /partial/nav.blade.php --}}
	<div class="container">
		@yield('content')
	</div>
</body>
</html>
```

###### /board.blade.php

```php
@extends('layouts.master')

@section('title','排行榜')

@section('content')
	<div class="page-header">
			<h1>排名</h1>
		</div>
		<div class="row">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>名次</th>
						<th>學校</th>
						<th>姓名</th>
						<th>國文</th>
						<th>英文</th>
						<th>數學</th>
						<th>總分</th>
						<th>動作</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>s1234567890</td>
						<td>小明</td>
						<td>60</td>
						<td>60</td>
						<td>60</td>
						<td>180</td>
						<td><a class="btn btn-default btn-sm" href="<?php echo route('student',['student_no'=>'s1234567890']) ?>">查看學生資料</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	@stop
```

###### 改寫`StudentController`


```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use View;

class StudentController extends Controller
{
    public function getStudentData($student_no)
    {
        // return "學號：" . $student_no;
        return View::make ('score',[ //score.blade.php
        	'student_no'=>$student_no,
        	'subject'=>null
        ]);

    }

    public function getStudentScore($student_no, $subject = null)
    {
        // return "學號：" . $student_no . "的" . ((is_null($subject)) ? " 所有科目" : $subject) . "成績";
        return View::make ('score',[
        	'student_no'=>$student_no,
        	'subject'=>$subject
        ]);
    }
}

```

###### /score.blade.php
```php
@extends('layouts.master')

@section('title','詳細資料')

@section('content')
	<div class="page-header">
		<h1>詳細資料</h1>
	</div>
	<div class="row">
		<p>
			學號：{{ $student_no }}
		</p>
		<p>
			姓名：小明
		</p>
		<p>
			電話：0912345678
		</p>
		@if( is_null($subject) || $subject=='chinese' )
			<p>
				國文：60
			</p>
		@endif
		@if( is_null($subject) || $subject=='english' )
			<p>
				英文：60
			</p>
		@endif
		@if( is_null($subject) || $subject=='math' )
			<p>
				數學：60
			</p>
		@endif
	</div>
@stop
```

###### **routes.php**


```php
Route::pattern('student_no', 's[0-9]{10}'); //條件 正則表達式 Regex
Route::group(['prefix' => 'student'], function () {

    Route::get('{student_no}', [
        'as'   => 'student',//命名 但仲未知有咩用...
        'uses' => 'StudentController@getStudentData',
    ]);

});
```



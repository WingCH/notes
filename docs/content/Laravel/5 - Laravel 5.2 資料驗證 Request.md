# 5 - Laravel 5.2 資料驗證 Request

生成Request檔案`php artisan make:request EditRequest`


> app/Http/EditRequest.php

```php
...

class EditRequest extends Request
{
    /**
     * 取得使用者是否授權執行此請求
     *
     * @return bool
     */
    //https://www.crodecasts.com/blog/post/programming-with-laravel-5-form-request-and-validation
    public function authorize()
    {
        return true;//是否是需要進行身份驗證 
    }

    /**
     * 取得請求的驗證規則
     *
     * @return array
     */

    public function rules()
    {
        return [
            'name' => 'required|email',//不可以null and 要string
            'tel'  => 'required|string'
        ];
    }
    
    /**
    * 自定義錯誤訊息
    *
    * @return array
    */
    public function messages()//如果沒有set的話 會用系統預設的錯誤訊息（英文）
    {
        return [
            'required'  => '不可為空白',
            'string'    => '須為字串'
        ];
    }
}

```

> app/Http/Controllers/SchoolController.php

```php
...

class SchoolController extends Controller
{

	public function getEdit($student_no){
		$student=StudentEloquent::where('no',$student_no)->firstOrFail();
		return View::make('edit',['student'=>$student]);
	}


	public function postEdit($student_no,EditRequest $request){
		//上面寫 EditRequest 已經自動將d data 掉晒入去 -> EditRequest.php
		$student=StudentEloquent::where('no',$student_no)->firstOrFail();
		$student->tel=$request->tel;
		$student->user->name=$request->name;
		$student->user->save();
		$student->save();
		return View::make('edit',['student'=>$student,'msg'=>'修改成功']);
	}

}

```

> resources/views/edit.blade.php

```html
...
	<div class="page-header">
		<h1>個人資料編輯</h1>
	</div>
	@if(isset($msg)) {{-- check有無野 --}}
		<div class="alert alert-success" role="alert">
			{{{ $msg or '' }}}
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	@endif

	<div class="row">
		<div class="col-md-4 col-md-offset-4">
			<form method="POST" action="{{ action('SchoolController@postEdit',['student_no'=>$student->no]) }}">
				{{ csrf_field() }}
				<div class="form-group">
					<label>
						信箱：{{ $student->user->email }}
					</label>
				</div>
				<div class="form-group {{ $errors->has('name') ? 'has-error' : '' }}">
					{{-- bootstrap : 有has-error 個格會紅邊 http://v3.bootcss.com/css/--}} 
					<label class="control-label" for="name">姓名</label>
					<input type="text" class="form-control" name="name" value="{{ $student->user->name }}" />

					@if ($errors->has('name'))
					{{-- 如果name個格有error EditRequest 會入個'name'去error到 --}}
						<span class="help-block">
							<strong>{{ $errors->first('name') }}</strong>
							{{-- EditRequest:messages()放入去 --}}
						</span>
					 @endif
				</div>

				...

```

> app/Http/routes.php


```php
...
Route::get('edit/{student_no}','SchoolController@getEdit');
Route::post('edit/{student_no}','SchoolController@postEdit');
```

效果:

![](./media/15089166877240/15090051518288.gif)



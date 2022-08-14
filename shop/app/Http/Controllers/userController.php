<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use stdClass;

class userController extends Controller
{
    public function index(Request $request)
    {
        $user = DB::table('user')->where('email', $request->email)->where('password', $request->password)->first();
        $data = new stdClass;

        if ($user) {
            Session::put("token", $user->token);

            $data->email = $user->email;
            $data->token = $user->token;
            $data->name = $user->name;
            $data->phone = $user->phone;
            $data->birthDay = $user->birthday;
            $data->imgUser = $user->imgUser;
            $data->status = 200;
            $data->statusText = "ok";
            return $data;
        } else {
            $data->status = 400;
            $data->statusText = "erros";
            return $data;
        }
    }
    public function create(Request $request)
    {
        DB::table('user')->insert([
            'email' => $request->email,
            'password' => $request->password,
            'name' => $request->name
        ]);
        $user = DB::table('user')->where('email', $request->email)->where('password', $request->password)->first();
        $data = new stdClass;

        if ($user) {
            Session::put("token", $user->token);

            $data->email = $user->email;
            $data->token = $user->token;
            $data->name = $user->name;
            $data->phone = $user->phone;
            $data->birthDay = $user->birthday;
            $data->imgUser = $user->imgUser;
            $data->status = 200;
            $data->statusText = "ok";
            return $data;
        } else {
            $data->status = 400;
            $data->statusText = "erros";
            return $data;
        }
    }
    //profile user
    public function profile(Request $request)
    {
        $user = DB::table('user')->where('token', $request->tokens)->first();
        $data = new stdClass;
        $data->email = $user->email;
        $data->token = $user->token;
        $data->name = $user->name;
        $data->phone = $user->phone;
        $data->birthDay = $user->birthday;
        $data->imgUser = $user->imgUser;
        $data->status = 200;
        $data->statusText = "ok";
        return $data;
    }

    public function logout(Request $request)
    {
        // $data = new stdClass;

        if (Session::get("token") == $request->token) {
            Session::put("token", null);
            // $data->status = 200;
            // $data->statusText = "ok";

        }
        // } else {
        //     $data->status = 500;
        //     $data->statusText = "no";
        //     return $data;
        // }
    }

    //category product
    public function flashDeals()
    {
        $product = DB::table('products')->skip(6)->take(6)->get();
        $data = new stdClass;
        $data->data = $product;
        $data->status = 200;
        $data->statusText = "ok";
        return $data;
    }

    public function topProducts()
    {
        $product = DB::table('products')->take(6)->get();
        $data = new stdClass;
        $data->data = $product;
        $data->status = 200;
        $data->statusText = "ok";
        return $data;
    }

    public function newProducts()
    {
        $product = DB::table('products')->orderByDesc('day')->take(6)->get();
        $data = new stdClass;
        $data->data = $product;
        $data->status = 200;
        $data->statusText = "ok";
        return $data;
    }

    //trademark
    public function adidas()
    {
        $product = DB::table('products')->orderByDesc('day')->where('trademark', 'adidas')->take(6)->get();
        $data = new stdClass;
        $data->data = $product;
        $data->status = 200;
        $data->statusText = "ok";
        return $data;
    }

    //category
    public function category($pageNumber)
    {
        $page = (int)$pageNumber;
        $idCount = DB::table('products')->count('idProduct');
        $pageCount = (int)$idCount / 6;
        $product = DB::table('products')->skip(1 + (6 * $page))->take(6)->get();

        $data = new stdClass;
        $data->data = $product;
        $data->page = $page;
        $data->pageCount = $pageCount;
        $data->status = 200;
        $data->statusText = "ok";
        return $data;
    }
    public function categorySearch(Request $request)
    {
        // $page = (int)$pageNumber;
        // $idCount = DB::table('products')->count('idProduct');
        // $pageCount = (int)$idCount / 6;
        // $product = DB::table('products')->skip(1 + (6 * $page))->take(6)->get();

        // $data = new stdClass;
        // $data->data = $product;
        // $data->page = $page;
        // $data->pageCount = $pageCount;
        // $data->status = 200;
        // $data->statusText = "ok";
        // return $data;
        return $request;
    }
}
// 1 ->6
// 7-> 12
//13 ->18

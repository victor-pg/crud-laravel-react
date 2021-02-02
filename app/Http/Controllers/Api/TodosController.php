<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class TodosController extends Controller
{
    public function getTodos(){
        $todos = DB::table('todos')->get();
        return $todos;
    }

    public function getTodo($id){
        $todo = DB::table('todos')->get()->where('id',$id);
        return $todo;
    }
    
    public function changeStatus($id){
        $todoStatus = DB::table('todos')->where('id',$id)->value('status');
        $newStatus=0;

        if($todoStatus) $newStatus=false;
        else $newStatus=true;

        $updated = DB::table('todos')->where('id',$id)->update(['status'=>$newStatus]);
        if($updated) return "Succesfully updated";
        else return "Error while trying to update";
    }

    public function addTodo(Request $req){
        $body = $req->all();
        $title = $body['title'];
        $status=false;
        $candidate = DB::table('todos')->where('title',$title)->value('title');
        if($candidate) {
            return "This todo already exists";
        }else{
            $tryToAdd = DB::table('todos')->
            insert([
                'title'=>$title,
                'status'=>$status
            ]);
            if($tryToAdd) return "Added";
            else return "Error while adding new todo";
        };

    }
    
    public function deleteTodo($id){
        $tryToDelete = DB::table('todos')->where('id',$id)->delete();
        if($tryToDelete) return "Deleted succesfully";
        else return "Error while deleting";
    }
}

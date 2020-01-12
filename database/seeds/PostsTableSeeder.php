<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('posts')->insert([
            [
                'name' => '太郎',
                'content' => '内容1'
            ],
            [
                'name' => '二郎',
                'content' => '内容2'
            ],
            [
                'name' => '三郎',
                'content' => '内容3'
            ],
        ]);
    }
}

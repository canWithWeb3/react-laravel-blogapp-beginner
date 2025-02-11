<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = [
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin1'),
            'role' => 'admin'
        ];

        User::create($admin);
    }
}

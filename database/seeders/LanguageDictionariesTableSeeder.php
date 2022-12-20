<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class LanguageDictionariesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('language_dictionaries')->delete();
        
        \DB::table('language_dictionaries')->insert(array (
            0 => 
            array (
                'id' => 6,
                'language_id' => 1,
                'word' => 'Add new word',
                'translate' => 'افزودن لغت جدید',
                'created_at' => '2022-12-14 07:04:07',
                'updated_at' => '2022-12-14 07:04:07',
            ),
            1 => 
            array (
                'id' => 11,
                'language_id' => 1,
                'word' => '[language] language dictionary',
                'translate' => 'ذخیره لغات زبان [language]',
                'created_at' => '2022-12-14 10:07:41',
                'updated_at' => '2022-12-15 05:37:31',
            ),
            2 => 
            array (
                'id' => 12,
                'language_id' => 1,
                'word' => 'Add language',
                'translate' => 'اضافه نمودن زبان',
                'created_at' => '2022-12-14 11:35:05',
                'updated_at' => '2022-12-14 11:35:05',
            ),
            3 => 
            array (
                'id' => 13,
                'language_id' => 1,
                'word' => 'Dari',
                'translate' => 'دری',
                'created_at' => '2022-12-15 05:36:50',
                'updated_at' => '2022-12-15 05:36:50',
            ),
            4 => 
            array (
                'id' => 15,
                'language_id' => 6,
                'word' => '[language] language dictionary',
                'translate' => 'ده [language] ژبه لغاتونه',
                'created_at' => '2022-12-15 06:51:56',
                'updated_at' => '2022-12-15 07:01:31',
            ),
            5 => 
            array (
                'id' => 16,
                'language_id' => 6,
                'word' => 'Add new word',
                'translate' => 'نوی لغت اضافه کول',
                'created_at' => '2022-12-15 06:55:34',
                'updated_at' => '2022-12-15 06:55:34',
            ),
            6 => 
            array (
                'id' => 17,
                'language_id' => 6,
                'word' => 'Pashto',
                'translate' => 'پشتو',
                'created_at' => '2022-12-15 06:56:08',
                'updated_at' => '2022-12-15 06:56:08',
            ),
            7 => 
            array (
                'id' => 18,
                'language_id' => 1,
                'word' => 'Pashto',
                'translate' => 'پشتو',
                'created_at' => '2022-12-15 08:41:47',
                'updated_at' => '2022-12-15 08:41:47',
            ),
            8 => 
            array (
                'id' => 19,
                'language_id' => 1,
                'word' => 'Dashboard',
                'translate' => 'داشبورد',
                'created_at' => '2022-12-15 09:07:02',
                'updated_at' => '2022-12-15 09:07:02',
            ),
            9 => 
            array (
                'id' => 20,
                'language_id' => 1,
                'word' => 'User management',
                'translate' => 'مدریت استفاده کننده ها',
                'created_at' => '2022-12-15 09:07:24',
                'updated_at' => '2022-12-17 11:15:05',
            ),
            10 => 
            array (
                'id' => 21,
                'language_id' => 1,
                'word' => 'Configuration',
                'translate' => 'تنظیمات',
                'created_at' => '2022-12-15 09:08:22',
                'updated_at' => '2022-12-15 09:08:22',
            ),
            11 => 
            array (
                'id' => 22,
                'language_id' => 1,
                'word' => 'Word',
                'translate' => 'لغت',
                'created_at' => '2022-12-15 09:16:19',
                'updated_at' => '2022-12-15 09:16:19',
            ),
            12 => 
            array (
                'id' => 23,
                'language_id' => 1,
                'word' => 'Translate',
                'translate' => 'ترجمه',
                'created_at' => '2022-12-15 09:16:36',
                'updated_at' => '2022-12-15 09:16:36',
            ),
            13 => 
            array (
                'id' => 24,
                'language_id' => 1,
                'word' => 'Created at',
                'translate' => 'ایجاد شده در',
                'created_at' => '2022-12-15 09:17:01',
                'updated_at' => '2022-12-15 09:17:01',
            ),
            14 => 
            array (
                'id' => 25,
                'language_id' => 1,
                'word' => 'Actions',
                'translate' => 'اجرآت',
                'created_at' => '2022-12-15 09:17:49',
                'updated_at' => '2022-12-15 09:17:49',
            ),
            15 => 
            array (
                'id' => 26,
                'language_id' => 1,
                'word' => 'ID',
                'translate' => 'آی دی',
                'created_at' => '2022-12-15 09:18:05',
                'updated_at' => '2022-12-15 09:18:05',
            ),
            16 => 
            array (
                'id' => 27,
                'language_id' => 1,
                'word' => 'NO#',
                'translate' => 'شماره',
                'created_at' => '2022-12-15 09:18:24',
                'updated_at' => '2022-12-15 09:19:10',
            ),
            17 => 
            array (
                'id' => 28,
                'language_id' => 1,
                'word' => 'Collapse 
sidebar',
                'translate' => 'بسته نمودن ساید بار',
                'created_at' => '2022-12-17 04:55:19',
                'updated_at' => '2022-12-17 04:55:33',
            ),
            18 => 
            array (
                'id' => 29,
                'language_id' => 1,
                'word' => 'Language',
                'translate' => 'زبان',
                'created_at' => '2022-12-17 04:55:59',
                'updated_at' => '2022-12-17 04:55:59',
            ),
            19 => 
            array (
                'id' => 30,
                'language_id' => 1,
                'word' => 'My profile',
                'translate' => 'پروفایل من',
                'created_at' => '2022-12-17 04:56:45',
                'updated_at' => '2022-12-17 04:56:45',
            ),
            20 => 
            array (
                'id' => 31,
                'language_id' => 1,
                'word' => 'Logout',
                'translate' => 'خروج از سیستم',
                'created_at' => '2022-12-17 04:57:00',
                'updated_at' => '2022-12-17 04:57:00',
            ),
            21 => 
            array (
                'id' => 32,
                'language_id' => 1,
                'word' => 'Users',
                'translate' => 'استفاده کننده ها',
                'created_at' => '2022-12-17 04:57:54',
                'updated_at' => '2022-12-17 04:57:54',
            ),
            22 => 
            array (
                'id' => 33,
                'language_id' => 1,
                'word' => 'Roles',
                'translate' => 'صلاحیت ها',
                'created_at' => '2022-12-17 04:59:17',
                'updated_at' => '2022-12-17 04:59:17',
            ),
            23 => 
            array (
                'id' => 34,
                'language_id' => 1,
                'word' => 'List users',
                'translate' => 'لیست استفاده کننده ها',
                'created_at' => '2022-12-17 05:03:27',
                'updated_at' => '2022-12-17 05:03:27',
            ),
            24 => 
            array (
                'id' => 35,
                'language_id' => 1,
                'word' => 'Add new user',
                'translate' => 'ایجاد یوزر جدید',
                'created_at' => '2022-12-17 05:04:11',
                'updated_at' => '2022-12-17 05:04:11',
            ),
            25 => 
            array (
                'id' => 36,
                'language_id' => 1,
                'word' => 'Name',
                'translate' => 'اسم',
                'created_at' => '2022-12-17 05:04:46',
                'updated_at' => '2022-12-17 05:04:46',
            ),
            26 => 
            array (
                'id' => 37,
                'language_id' => 1,
                'word' => 'Email',
                'translate' => 'ایمیل',
                'created_at' => '2022-12-17 05:04:57',
                'updated_at' => '2022-12-17 05:04:57',
            ),
            27 => 
            array (
                'id' => 38,
                'language_id' => 1,
                'word' => 'Status',
                'translate' => 'حالت',
                'created_at' => '2022-12-17 05:05:10',
                'updated_at' => '2022-12-17 05:05:10',
            ),
            28 => 
            array (
                'id' => 39,
                'language_id' => 1,
                'word' => 'Phone number',
                'translate' => 'شماره تماس',
                'created_at' => '2022-12-17 05:05:26',
                'updated_at' => '2022-12-17 05:05:26',
            ),
            29 => 
            array (
                'id' => 40,
                'language_id' => 1,
                'word' => 'Search',
                'translate' => 'جستجو',
                'created_at' => '2022-12-17 05:09:18',
                'updated_at' => '2022-12-17 05:09:18',
            ),
            30 => 
            array (
                'id' => 41,
                'language_id' => 1,
                'word' => 'Number of record',
                'translate' => 'تعداد نمایش عداد در صفحه',
                'created_at' => '2022-12-17 05:11:09',
                'updated_at' => '2022-12-17 05:11:09',
            ),
            31 => 
            array (
                'id' => 42,
                'language_id' => 1,
                'word' => 'No record found',
                'translate' => 'هیج نو معلومات دریافت نشد',
                'created_at' => '2022-12-17 05:12:12',
                'updated_at' => '2022-12-17 05:12:12',
            ),
            32 => 
            array (
                'id' => 43,
                'language_id' => 1,
                'word' => 'Hello - [first_name] [last_name]',
                'translate' => 'سلام [first_name] [last_name]',
                'created_at' => '2022-12-17 05:13:50',
                'updated_at' => '2022-12-17 05:13:50',
            ),
            33 => 
            array (
                'id' => 44,
                'language_id' => 1,
                'word' => 'User Form',
                'translate' => 'فورم استفاده کننده ها',
                'created_at' => '2022-12-17 05:18:40',
                'updated_at' => '2022-12-17 05:18:40',
            ),
            34 => 
            array (
                'id' => 45,
                'language_id' => 1,
                'word' => 'Profile picture',
                'translate' => 'عکس استفاده کننده',
                'created_at' => '2022-12-17 05:19:13',
                'updated_at' => '2022-12-17 05:19:13',
            ),
            35 => 
            array (
                'id' => 46,
                'language_id' => 1,
                'word' => 'First name',
                'translate' => 'اسم',
                'created_at' => '2022-12-17 05:19:36',
                'updated_at' => '2022-12-17 05:19:36',
            ),
            36 => 
            array (
                'id' => 47,
                'language_id' => 1,
                'word' => 'Last name',
                'translate' => 'تخلص',
                'created_at' => '2022-12-17 05:19:52',
                'updated_at' => '2022-12-17 05:19:52',
            ),
            37 => 
            array (
                'id' => 48,
                'language_id' => 1,
                'word' => 'Password',
                'translate' => 'رمز',
                'created_at' => '2022-12-17 05:20:34',
                'updated_at' => '2022-12-17 05:20:34',
            ),
            38 => 
            array (
                'id' => 49,
                'language_id' => 1,
                'word' => 'Confirm password',
                'translate' => 'تاییدی رمز',
                'created_at' => '2022-12-17 05:20:50',
                'updated_at' => '2022-12-17 05:20:50',
            ),
            39 => 
            array (
                'id' => 50,
                'language_id' => 1,
                'word' => 'Show password',
                'translate' => 'نمایش رمز',
                'created_at' => '2022-12-17 05:21:06',
                'updated_at' => '2022-12-17 05:21:06',
            ),
            40 => 
            array (
                'id' => 51,
                'language_id' => 1,
                'word' => 'Save',
                'translate' => 'ثبت',
                'created_at' => '2022-12-17 05:21:32',
                'updated_at' => '2022-12-17 05:21:32',
            ),
            41 => 
            array (
                'id' => 52,
                'language_id' => 1,
                'word' => 'Close',
                'translate' => 'بستن',
                'created_at' => '2022-12-17 05:21:44',
                'updated_at' => '2022-12-17 05:21:44',
            ),
            42 => 
            array (
                'id' => 53,
                'language_id' => 1,
                'word' => 'Active',
                'translate' => 'فعلل',
                'created_at' => '2022-12-17 05:27:00',
                'updated_at' => '2022-12-17 05:27:00',
            ),
            43 => 
            array (
                'id' => 54,
                'language_id' => 1,
                'word' => 'Inactive',
                'translate' => 'غیر فعال',
                'created_at' => '2022-12-17 05:27:14',
                'updated_at' => '2022-12-17 05:27:14',
            ),
            44 => 
            array (
                'id' => 55,
                'language_id' => 1,
                'word' => 'Super admin',
                'translate' => 'ادیمن عمومی',
                'created_at' => '2022-12-17 08:25:52',
                'updated_at' => '2022-12-17 08:25:52',
            ),
            45 => 
            array (
                'id' => 56,
                'language_id' => 1,
                'word' => 'Updated successfully',
                'translate' => 'موفقانه تجدید گردید',
                'created_at' => '2022-12-17 10:09:47',
                'updated_at' => '2022-12-17 10:26:33',
            ),
            46 => 
            array (
                'id' => 57,
                'language_id' => 1,
                'word' => 'Are you sure you want to delete',
                'translate' => 'آیا شما مطمین هستید',
                'created_at' => '2022-12-17 10:34:27',
                'updated_at' => '2022-12-17 10:34:27',
            ),
            47 => 
            array (
                'id' => 58,
                'language_id' => 1,
                'word' => 'List of roles',
                'translate' => 'لیست صلاحیت ها',
                'created_at' => '2022-12-17 10:36:00',
                'updated_at' => '2022-12-17 10:36:53',
            ),
            48 => 
            array (
                'id' => 59,
                'language_id' => 1,
                'word' => 'Create role group',
                'translate' => 'ایجاد گروپ جدید برای صلاحیت ها',
                'created_at' => '2022-12-17 10:37:45',
                'updated_at' => '2022-12-17 10:37:45',
            ),
            49 => 
            array (
                'id' => 60,
                'language_id' => 1,
                'word' => 'Admins',
                'translate' => 'مدیران',
                'created_at' => '2022-12-17 10:38:30',
                'updated_at' => '2022-12-17 10:38:30',
            ),
            50 => 
            array (
                'id' => 61,
                'language_id' => 1,
                'word' => 'Role group',
                'translate' => 'گروپ صلاحیت ها',
                'created_at' => '2022-12-17 10:44:37',
                'updated_at' => '2022-12-17 10:44:37',
            ),
            51 => 
            array (
                'id' => 62,
                'language_id' => 1,
                'word' => 'Role',
                'translate' => 'صلاحیت',
                'created_at' => '2022-12-17 10:45:10',
                'updated_at' => '2022-12-17 10:45:10',
            ),
            52 => 
            array (
                'id' => 63,
                'language_id' => 1,
                'word' => 'Role group name',
                'translate' => 'اسم گروپ صلاحت ها',
                'created_at' => '2022-12-17 10:45:43',
                'updated_at' => '2022-12-17 10:45:43',
            ),
            53 => 
            array (
                'id' => 64,
                'language_id' => 1,
                'word' => 'Role name',
                'translate' => 'اسم صلاحیت',
                'created_at' => '2022-12-17 10:45:59',
                'updated_at' => '2022-12-17 10:45:59',
            ),
            54 => 
            array (
                'id' => 65,
                'language_id' => 1,
                'word' => 'The name field is required.',
                'translate' => 'بخش اسم ضرور میباشد',
                'created_at' => '2022-12-17 10:53:50',
                'updated_at' => '2022-12-17 10:53:50',
            ),
            55 => 
            array (
                'id' => 66,
                'language_id' => 1,
                'word' => 'Role details',
                'translate' => 'جزیات صلاحیت',
                'created_at' => '2022-12-17 10:57:38',
                'updated_at' => '2022-12-17 10:57:38',
            ),
            56 => 
            array (
                'id' => 67,
                'language_id' => 1,
                'word' => 'Created by',
                'translate' => 'ایجاد شده توسط',
                'created_at' => '2022-12-17 10:58:26',
                'updated_at' => '2022-12-17 10:58:26',
            ),
            57 => 
            array (
                'id' => 68,
                'language_id' => 1,
                'word' => 'Updated by',
                'translate' => 'تجدید شده توسط',
                'created_at' => '2022-12-17 10:58:43',
                'updated_at' => '2022-12-17 10:58:43',
            ),
            58 => 
            array (
                'id' => 69,
                'language_id' => 1,
                'word' => 'Role all assigned permissions',
                'translate' => 'تمام دسترسی های موجود',
                'created_at' => '2022-12-17 11:00:22',
                'updated_at' => '2022-12-17 11:00:22',
            ),
            59 => 
            array (
                'id' => 70,
                'language_id' => 1,
                'word' => 'Permissions',
                'translate' => 'دسترسی ها',
                'created_at' => '2022-12-17 11:02:59',
                'updated_at' => '2022-12-17 11:02:59',
            ),
            60 => 
            array (
                'id' => 71,
                'language_id' => 1,
                'word' => 'Groups',
                'translate' => 'گروپ ها',
                'created_at' => '2022-12-17 11:03:26',
                'updated_at' => '2022-12-17 11:03:26',
            ),
            61 => 
            array (
                'id' => 72,
                'language_id' => 1,
                'word' => 'Access',
                'translate' => 'اجازه',
                'created_at' => '2022-12-17 11:05:07',
                'updated_at' => '2022-12-17 11:05:07',
            ),
            62 => 
            array (
                'id' => 73,
                'language_id' => 1,
                'word' => 'Create user',
                'translate' => 'ایجاد یوزر',
                'created_at' => '2022-12-17 11:06:11',
                'updated_at' => '2022-12-17 11:06:11',
            ),
            63 => 
            array (
                'id' => 74,
                'language_id' => 1,
                'word' => 'Edit user',
                'translate' => 'تجدید یوزر',
                'created_at' => '2022-12-17 11:06:25',
                'updated_at' => '2022-12-17 11:06:25',
            ),
            64 => 
            array (
                'id' => 75,
                'language_id' => 1,
                'word' => 'Delete user',
                'translate' => 'حذف یوزر',
                'created_at' => '2022-12-17 11:06:45',
                'updated_at' => '2022-12-17 11:06:45',
            ),
            65 => 
            array (
                'id' => 76,
                'language_id' => 1,
                'word' => 'View profile',
                'translate' => 'مشاهده جزیات یوزر',
                'created_at' => '2022-12-17 11:07:17',
                'updated_at' => '2022-12-17 11:07:32',
            ),
            66 => 
            array (
                'id' => 77,
                'language_id' => 1,
                'word' => 'View role details',
                'translate' => 'مشاهده جزیات صلاحیت',
                'created_at' => '2022-12-17 11:08:14',
                'updated_at' => '2022-12-17 11:08:14',
            ),
            67 => 
            array (
                'id' => 78,
                'language_id' => 1,
                'word' => 'Create role',
                'translate' => 'ایجاد صلاحیت',
                'created_at' => '2022-12-17 11:08:28',
                'updated_at' => '2022-12-17 11:08:28',
            ),
            68 => 
            array (
                'id' => 79,
                'language_id' => 1,
                'word' => 'Edit role',
                'translate' => 'تجدید صلاحیت',
                'created_at' => '2022-12-17 11:08:46',
                'updated_at' => '2022-12-17 11:08:46',
            ),
            69 => 
            array (
                'id' => 80,
                'language_id' => 1,
                'word' => 'Delete role',
                'translate' => 'حذف صلاحیت',
                'created_at' => '2022-12-17 11:09:01',
                'updated_at' => '2022-12-17 11:09:01',
            ),
            70 => 
            array (
                'id' => 81,
                'language_id' => 1,
                'word' => 'Create language',
                'translate' => 'ایجاد زبان',
                'created_at' => '2022-12-17 11:09:42',
                'updated_at' => '2022-12-17 11:09:42',
            ),
            71 => 
            array (
                'id' => 82,
                'language_id' => 1,
                'word' => 'Edit language name',
                'translate' => 'تجدید اسم زبان',
                'created_at' => '2022-12-17 11:10:07',
                'updated_at' => '2022-12-17 11:10:07',
            ),
            72 => 
            array (
                'id' => 83,
                'language_id' => 1,
                'word' => 'Delete language',
                'translate' => 'حذف زبان',
                'created_at' => '2022-12-17 11:10:22',
                'updated_at' => '2022-12-17 11:10:22',
            ),
            73 => 
            array (
                'id' => 84,
                'language_id' => 1,
                'word' => 'Language dictionary',
                'translate' => 'ذخیره لغات زبان',
                'created_at' => '2022-12-17 11:10:57',
                'updated_at' => '2022-12-17 11:10:57',
            ),
            74 => 
            array (
                'id' => 85,
                'language_id' => 1,
                'word' => 'Add new word to dictionary',
                'translate' => 'اضافه کردن لغت جدید در ذخیره لغات',
                'created_at' => '2022-12-17 11:11:57',
                'updated_at' => '2022-12-17 11:11:57',
            ),
            75 => 
            array (
                'id' => 86,
                'language_id' => 1,
                'word' => 'Edit word',
                'translate' => 'تجدید لغت',
                'created_at' => '2022-12-17 11:12:13',
                'updated_at' => '2022-12-17 11:12:13',
            ),
            76 => 
            array (
                'id' => 87,
                'language_id' => 1,
                'word' => 'Delete word',
                'translate' => 'حذف لغت',
                'created_at' => '2022-12-17 11:12:28',
                'updated_at' => '2022-12-17 11:12:28',
            ),
            77 => 
            array (
                'id' => 88,
                'language_id' => 1,
                'word' => 'This is user management section',
                'translate' => 'بخش مدریت استفاده کننده ها',
                'created_at' => '2022-12-17 11:14:28',
                'updated_at' => '2022-12-17 11:14:28',
            ),
            78 => 
            array (
                'id' => 89,
                'language_id' => 1,
                'word' => 'Welcome to configuration page',
                'translate' => 'خوش آمدید به صفحه تنظیمات',
                'created_at' => '2022-12-17 11:16:04',
                'updated_at' => '2022-12-17 11:16:04',
            ),
            79 => 
            array (
                'id' => 90,
                'language_id' => 1,
                'word' => 'Languages',
                'translate' => 'زبان ها',
                'created_at' => '2022-12-17 11:19:04',
                'updated_at' => '2022-12-17 11:19:04',
            ),
            80 => 
            array (
                'id' => 91,
                'language_id' => 1,
                'word' => 'Are you sure you want to delete this group',
                'translate' => 'آیا شما مطمین هستید که میخواهد ای گروپ ره حذف نمایید',
                'created_at' => '2022-12-17 11:20:04',
                'updated_at' => '2022-12-17 11:21:42',
            ),
            81 => 
            array (
                'id' => 92,
                'language_id' => 1,
                'word' => 'Are you sure you want to delete this role?',
                'translate' => 'آیا شما مطمین هستید که میخواهید ای صلاحیت ره حذف نمایید',
                'created_at' => '2022-12-17 11:22:32',
                'updated_at' => '2022-12-17 11:22:32',
            ),
            82 => 
            array (
                'id' => 93,
                'language_id' => 1,
                'word' => 'Language list',
                'translate' => 'لیست زبان ها',
                'created_at' => '2022-12-17 11:23:14',
                'updated_at' => '2022-12-17 11:23:14',
            ),
            83 => 
            array (
                'id' => 94,
                'language_id' => 1,
                'word' => 'Language form',
                'translate' => 'فورم زبان',
                'created_at' => '2022-12-17 11:26:08',
                'updated_at' => '2022-12-17 11:26:08',
            ),
            84 => 
            array (
                'id' => 95,
                'language_id' => 1,
                'word' => 'Language name',
                'translate' => 'اسم زبان',
                'created_at' => '2022-12-17 11:26:49',
                'updated_at' => '2022-12-17 11:26:49',
            ),
            85 => 
            array (
                'id' => 96,
                'language_id' => 1,
                'word' => 'Language abbreviation',
                'translate' => 'مخفف زبان',
                'created_at' => '2022-12-17 11:27:05',
                'updated_at' => '2022-12-17 11:27:05',
            ),
            86 => 
            array (
                'id' => 97,
                'language_id' => 1,
                'word' => 'Direction',
                'translate' => 'مسیر صفحه',
                'created_at' => '2022-12-17 11:27:26',
                'updated_at' => '2022-12-17 11:27:26',
            ),
            87 => 
            array (
                'id' => 98,
                'language_id' => 1,
                'word' => 'Right to left',
                'translate' => 'راست به چپ',
                'created_at' => '2022-12-17 11:27:41',
                'updated_at' => '2022-12-17 11:27:41',
            ),
            88 => 
            array (
                'id' => 99,
                'language_id' => 1,
                'word' => 'Left to right',
                'translate' => 'چپ به راست',
                'created_at' => '2022-12-17 11:27:55',
                'updated_at' => '2022-12-17 11:27:55',
            ),
            89 => 
            array (
                'id' => 100,
                'language_id' => 1,
                'word' => 'Welcome to the Dashboard',
                'translate' => 'خوش آمدید به صفحه اصلی',
                'created_at' => '2022-12-17 11:30:31',
                'updated_at' => '2022-12-17 11:30:31',
            ),
            90 => 
            array (
                'id' => 101,
                'language_id' => 1,
                'word' => 'Mr/Mrs [last_name] profile details',
                'translate' => 'جزیات محترم\\محترمه [last_name]',
                'created_at' => '2022-12-18 09:12:49',
                'updated_at' => '2022-12-18 09:12:49',
            ),
            91 => 
            array (
                'id' => 102,
                'language_id' => 1,
                'word' => 'User details',
                'translate' => 'جزیات بیشتر استفاده کننده',
                'created_at' => '2022-12-19 06:01:00',
                'updated_at' => '2022-12-19 06:01:00',
            ),
            92 => 
            array (
                'id' => 103,
                'language_id' => 1,
                'word' => 'User profile',
                'translate' => 'پروفایل یوزر',
                'created_at' => '2022-12-19 06:01:32',
                'updated_at' => '2022-12-19 06:01:32',
            ),
            93 => 
            array (
                'id' => 104,
                'language_id' => 1,
                'word' => 'User log activity',
                'translate' => 'تمام کارکرد های استفاده کننده در سیستم',
                'created_at' => '2022-12-19 06:02:12',
                'updated_at' => '2022-12-19 06:02:12',
            ),
            94 => 
            array (
                'id' => 105,
                'language_id' => 1,
                'word' => 'User login activity',
                'translate' => 'لیست ورودی های استفاده کننده در سیستم',
                'created_at' => '2022-12-19 06:03:16',
                'updated_at' => '2022-12-19 06:03:16',
            ),
            95 => 
            array (
                'id' => 106,
                'language_id' => 1,
                'word' => 'Effected module',
                'translate' => 'بخش تغیر یافته',
                'created_at' => '2022-12-19 06:04:42',
                'updated_at' => '2022-12-19 06:04:42',
            ),
            96 => 
            array (
                'id' => 107,
                'language_id' => 1,
                'word' => 'Effected model',
                'translate' => 'مودل تغیر یافته',
                'created_at' => '2022-12-19 06:05:04',
                'updated_at' => '2022-12-19 06:05:04',
            ),
            97 => 
            array (
                'id' => 108,
                'language_id' => 1,
                'word' => 'Event',
                'translate' => 'رویداد',
                'created_at' => '2022-12-19 06:05:34',
                'updated_at' => '2022-12-19 06:05:34',
            ),
            98 => 
            array (
                'id' => 109,
                'language_id' => 1,
                'word' => 'Performed on',
                'translate' => 'تاریخ انجام شده',
                'created_at' => '2022-12-19 06:06:00',
                'updated_at' => '2022-12-19 06:06:00',
            ),
            99 => 
            array (
                'id' => 110,
                'language_id' => 1,
                'word' => 'User activity log',
                'translate' => 'تمام کارکرد های استفاده کننده در سیستم',
                'created_at' => '2022-12-19 06:08:00',
                'updated_at' => '2022-12-19 06:08:00',
            ),
            100 => 
            array (
                'id' => 111,
                'language_id' => 1,
                'word' => 'deleted',
                'translate' => 'حذف شده',
                'created_at' => '2022-12-19 06:10:48',
                'updated_at' => '2022-12-19 06:10:48',
            ),
            101 => 
            array (
                'id' => 112,
                'language_id' => 1,
                'word' => 'updated',
                'translate' => 'تجدید گریده',
                'created_at' => '2022-12-19 06:11:16',
                'updated_at' => '2022-12-19 06:11:16',
            ),
            102 => 
            array (
                'id' => 113,
                'language_id' => 1,
                'word' => 'created',
                'translate' => 'ایجاد شده',
                'created_at' => '2022-12-19 06:12:12',
                'updated_at' => '2022-12-19 06:12:12',
            ),
            103 => 
            array (
                'id' => 114,
                'language_id' => 1,
                'word' => 'Log details',
                'translate' => 'جزیات',
                'created_at' => '2022-12-19 06:12:59',
                'updated_at' => '2022-12-19 06:12:59',
            ),
            104 => 
            array (
                'id' => 115,
                'language_id' => 1,
                'word' => 'Activity details',
                'translate' => 'جزیات فعالیت',
                'created_at' => '2022-12-19 06:13:35',
                'updated_at' => '2022-12-19 06:13:35',
            ),
            105 => 
            array (
                'id' => 116,
                'language_id' => 1,
                'word' => 'Action type',
                'translate' => 'نوع عمل',
                'created_at' => '2022-12-19 06:13:56',
                'updated_at' => '2022-12-19 06:13:56',
            ),
            106 => 
            array (
                'id' => 117,
                'language_id' => 1,
                'word' => 'Effected on',
                'translate' => 'بخش تغیر یافته',
                'created_at' => '2022-12-19 06:14:23',
                'updated_at' => '2022-12-19 06:14:23',
            ),
            107 => 
            array (
                'id' => 118,
                'language_id' => 1,
                'word' => 'Date',
                'translate' => 'تاریخ',
                'created_at' => '2022-12-19 06:14:34',
                'updated_at' => '2022-12-19 06:14:34',
            ),
            108 => 
            array (
                'id' => 119,
                'language_id' => 1,
                'word' => 'Field name',
                'translate' => 'اسم بخش',
                'created_at' => '2022-12-19 06:17:00',
                'updated_at' => '2022-12-19 06:17:00',
            ),
            109 => 
            array (
                'id' => 120,
                'language_id' => 1,
                'word' => 'Field value',
                'translate' => 'دیتای بخش',
                'created_at' => '2022-12-19 06:17:39',
                'updated_at' => '2022-12-19 06:17:39',
            ),
            110 => 
            array (
                'id' => 121,
                'language_id' => 1,
                'word' => 'updated at',
                'translate' => 'تجدید گردیده در',
                'created_at' => '2022-12-19 06:19:19',
                'updated_at' => '2022-12-19 06:19:19',
            ),
            111 => 
            array (
                'id' => 122,
                'language_id' => 1,
                'word' => 'abbr',
                'translate' => 'تخفف',
                'created_at' => '2022-12-19 06:19:37',
                'updated_at' => '2022-12-19 06:19:37',
            ),
            112 => 
            array (
                'id' => 123,
                'language_id' => 1,
                'word' => 'IP address',
                'translate' => 'آدرس آی پی',
                'created_at' => '2022-12-19 06:21:02',
                'updated_at' => '2022-12-19 06:21:02',
            ),
            113 => 
            array (
                'id' => 124,
                'language_id' => 1,
                'word' => 'WAS LOGIN SUCCEED',
                'translate' => 'ورود با موفقیت انجام شد',
                'created_at' => '2022-12-19 06:21:22',
                'updated_at' => '2022-12-19 06:21:22',
            ),
            114 => 
            array (
                'id' => 125,
                'language_id' => 1,
                'word' => 'Logged in date',
                'translate' => 'تاریخ ورود به سیستم',
                'created_at' => '2022-12-19 06:22:14',
                'updated_at' => '2022-12-19 06:22:14',
            ),
            115 => 
            array (
                'id' => 126,
                'language_id' => 1,
                'word' => 'Backups',
                'translate' => 'پشتیبان گیری',
                'created_at' => '2022-12-20 10:22:35',
                'updated_at' => '2022-12-20 10:22:35',
            ),
            116 => 
            array (
                'id' => 127,
                'language_id' => 1,
                'word' => 'All available backups',
                'translate' => 'تمام نسخه های پشتیبان موجود',
                'created_at' => '2022-12-20 10:22:57',
                'updated_at' => '2022-12-20 10:22:57',
            ),
            117 => 
            array (
                'id' => 128,
                'language_id' => 1,
                'word' => 'Login log',
                'translate' => 'راپور ورود به سیستم',
                'created_at' => '2022-12-20 10:23:46',
                'updated_at' => '2022-12-20 10:23:46',
            ),
            118 => 
            array (
                'id' => 129,
                'language_id' => 1,
                'word' => 'User login log',
                'translate' => 'راپور ورودی ها کاربران در سیستم',
                'created_at' => '2022-12-20 10:24:27',
                'updated_at' => '2022-12-20 10:24:27',
            ),
            119 => 
            array (
                'id' => 130,
                'language_id' => 1,
                'word' => 'Truncate',
                'translate' => 'حذف همه',
                'created_at' => '2022-12-20 10:24:45',
                'updated_at' => '2022-12-20 10:24:45',
            ),
        ));
        
        
    }
}

# LearnEnglish项目后台接口文档
<!-- TOC -->autoauto- [LearnEnglish项目后台接口文档](#learnenglish项目后台接口文档)auto				- [状态码code 说明](#状态码code-说明)auto- [单词列表-1.0.0](#单词列表-100)auto				- [URL-1.0.0](#url-100)auto				- [GET请求-1.0.0](#get请求-100)auto				- [POST请求-1.0.0](#post请求-100)auto				- [PUT请求-1.0.0](#put请求-100)auto				- [DELETE请求-1.0.0](#delete请求-100)auto				- [Get计数加一请求-1.0.0](#get计数加一请求-100)auto- [第几章管理列表-1.0.1](#第几章管理列表-101)auto				- [URL-1.0.1](#url-101)auto				- [GET请求-1.0.1](#get请求-101)auto				- [POST请求-1.0.1](#post请求-101)auto				- [PUT请求-1.0.1](#put请求-101)auto				- [DELETE请求-1.0.1](#delete请求-101)autoauto<!-- /TOC -->

##### 状态码code 说明
code| 说明
----|:-----
0   |  对应的请求操作成功
1   |  对应的请求操作失败

# 单词列表-1.0.0
##### URL-1.0.0
> /public/wordsList

##### GET请求-1.0.0
> 获取列表

参数名|必选|类型|说明
----|:----|:----:|--
page_index| false | Number | 不传默认为1
page_size | false | Number | 不传默认为100
xue_sort  | false | Number | 请求第几章的 默认为全部

> 请求响应示例：
``` javascript
{
	msg: '',
	code: 0,
	page: {
		page_index: 1,
		page_size: 10,
		total: 111
	},
	data: [{
		xue_id: 0,
		xue_words: 'what',
		xue_input_count: 23,
		xue_audio_path: 'https://www.dragon./',
		xue_translate: 'n.什么'
	}],
}
```
##### POST请求-1.0.0
> 添加新的单词

参数名|必选|类型|说明
----|:----|:----:|:--
xue_words      | true  | Number | 无
xue_audio_path | false | String | 不传默认为 ''
xue_sort       | true  | Number | 无
xue_translate_n  | false | String | 不传默认为 ''
xue_translate_prom  | false | String | 不传默认为 ''
xue_translate_num  | false | String | 不传默认为 ''
xue_translate_adj  | false | String | 不传默认为 ''
xue_translate_adv  | false | String | 不传默认为 ''
xue_translate_v  | false | String | 不传默认为 ''
xue_translate_art  | false | String | 不传默认为 ''
xue_translate_prep  | false | String | 不传默认为 ''
xue_translate_conj  | false | String | 不传默认为 ''
xue_translate_aux  | false | String | 不传默认为 ''
xue_translate_interj  | false | String | 不传默认为 ''
xue_translate_vi  | false | String | 不传默认为 ''
xue_translate_vt  | false | String | 不传默认为 ''
xue_translate_other  | false | String | 不传默认为 ''



> 请求响应示例：
``` javascript
{
	msg: '添加成功！',
	code: 0,
}
```

##### PUT请求-1.0.0
> 修改更新单词的请求

参数名|必选|类型|说明
----|:----|:----:|:-----
xue_id         | true   | Number | 单词的xue_id
xue_words      | true   | String | 无
xue_audio_path | false  | String | 不传默认为 ''
xue_sort       | true   | Number | 默认为第一章
xue_translate_n  | false | String | 不传默认为 ''
xue_translate_prom  | false | String | 不传默认为 ''
xue_translate_num  | false | String | 不传默认为 ''
xue_translate_adj  | false | String | 不传默认为 ''
xue_translate_adv  | false | String | 不传默认为 ''
xue_translate_v  | false | String | 不传默认为 ''
xue_translate_art  | false | String | 不传默认为 ''
xue_translate_prep  | false | String | 不传默认为 ''
xue_translate_conj  | false | String | 不传默认为 ''
xue_translate_aux  | false | String | 不传默认为 ''
xue_translate_interj  | false | String | 不传默认为 ''
xue_translate_vi  | false | String | 不传默认为 ''
xue_translate_vt  | false | String | 不传默认为 ''
xue_translate_other  | false | String | 不传默认为 ''
> 请求响应示例：
``` javascript
{
	msg: '添加成功！',
	code: 0,
}
```

##### DELETE请求-1.0.0
> 删除该单词的请求

参数名|必选|类型|说明
-----|:----|:----:|:-----
xue_id| true | Number | 单词的xue_id


> 请求响应示例：
``` javascript
{
	msg: '删除成功！',
	code: 0,
}
```

##### Get计数加一请求-1.0.0

>> url: /public/wordsCountAdd

参数名|必选|类型|说明
-----|:----|:----:|:-----
xue_id| true | Number | 单词的xue_id


> 请求响应示例：
``` javascript
{
	msg: '计数加一成功！',
	code: 0,
}
```

 #
 #
 #
 #

# 第几章管理列表-1.0.1
##### URL-1.0.1
> /public/chapterList

##### GET请求-1.0.1
> 获取列表

参数名|必选|类型|说明
----|:----|:----:|--
page_index| false | Number | 不传默认为1
page_size | false | Number | 不传默认为100

> 请求响应示例：
``` javascript
{
	msg: '',
	code: 0,
	page: {
		page_index: 1,
		page_size: 10,
		total: 111
	},
	data: [{
		xue_id: 0,
		xue_chapter_str: '第一章'
	}],
}
```
##### POST请求-1.0.1
> 添加新的章节

参数名|必选|类型|说明
----|:----|:----:|:--
xue_chapter_str | true | String |  无


> 请求响应示例：
``` javascript
{
	msg: '添加成功！',
	code: 0,
}
```

##### PUT请求-1.0.1
> 修改更新单章节名的请求

参数名|必选|类型|说明
----|:----|:----:|:-----
id         | true   | Number | 无
xue_chapter_str     | false  | String | 无

> 请求响应示例：
``` javascript
{
	msg: '添加成功！',
	code: 0,
}
```

##### DELETE请求-1.0.1
> 删除该章节的请求

参数名|必选|类型|说明
-----|:----|:----:|:-----
id | true | Number | 无


> 请求响应示例：
``` javascript
{
	msg: '删除成功！',
	code: 0,
}
```
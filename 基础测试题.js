## 基础
- [x] 完成 [编程基础测试题](https://zhuanlan.zhihu.com/p/21102354)
- [x] 题 1 检查密码规则合法性
```
# 考察基本编码能力和字符串处理
# 参考 python 文档的字符串库

# 给定一个字符串，用以下规则检查合法性
# 完全符合返回 True，否则返回 False
# 1，第一位是字母
# 2，只能包含字母、数字、下划线
# 3，只能字母或数字结尾
# 4，最小长度2
# 5，最大长度10

def valid_password(pwd):
    password = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-'

    if pwd[0].isalpha() : # 1
        for i in pwd : # 2
            if i not in password :
                return False
        if pwd[-1].isalnum() : # 3
            if 10 >= len(pwd) >= 2 : # 4 5
                return True
            else :
                return False
        else :
            return False
    else :
        return False

if valid_password( input('请输入密码：') ) :
    print('密码验证通过')
else :
    print('密码不合法')
```
- [x] 题 2 返回 100 内的素数列表
```
# 考察基本的循环和选择概念、列表的使用

def su( n ):
    num = list(range(n+1))
    for i in range( 2, n+1 ) :
        if num[i] == 0 :
            continue
        for k in num[ i+1 :n+1 ] :
            if k % i == 0 :
                num[k] = 0
    return ( [i for i in num[2:] if i!=0 ] )

print( su(100) )
```
- [x] 题 3 给定一个只包含字母的字符串，返回单个字母出现的次数
```
# 考察字典的概念和使用

# 返回值为包含元组的列表，格式如下（对列表中元组的顺序不做要求）
# 参数 "hello"
# 返回值 [('h', 1), ('e', 1), ('l', 2), ('o', 1)]

def ci(string) :
    a = {}
    for i in string :
        a[i] = 0
    for i in string :
        a[i] += 1

    return [(i,a[i]) for i in a]

print( ci('hello') )
```
- [x] 题 4 给定一个英文句子（一个只有字母的字符串），将句中所有单词变为有且只有首字母大写的形式
```
# 考察基本的循环和选择概念、列表的使用

juzi = 'My best friend is PengXiaoYao , She is very cute and beautiful'

print( juzi.title() )
```
- [x] 题 5 写一个 Queue 类，它有两个方法，用法如下
```
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

print(q.dequeue()) # 1
print(q.dequeue()) # 2
print(q.dequeue()) # 3
```

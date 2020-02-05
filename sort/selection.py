def selection(a):
    for i in range(len(a) - 1):
        for j in range(i + 1, len(a)):
            if a[i] > a[j]:
                temp = a[i]
                a[i] = a[j]
                a[j] = temp
    return a


#冒泡排序测试
nums = [32, 31, 29, 26, 20, 24, 35, 6, 25, 39]
print("sort before:")
print(nums)
nums = selection(nums)
print("sort after:")
print(nums)
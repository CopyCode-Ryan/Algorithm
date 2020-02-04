def bubble(a):
    for i in range(len(a) - 1):
        for j in range(len(a) - 1):
            if a[j] > a[j + 1]:
                temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
    return a


#冒泡排序测试
nums = [32, 31, 29, 26, 20, 24, 35, 6, 25, 39]
print("sort before:")
print(nums)
nums = bubble(nums)
print("sort after:")
print(nums)
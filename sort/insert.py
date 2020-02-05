def insertSort(a):
    for i in range(len(a) - 1):
        j = i - 1
        temp = a[i]
        while (j > -1 and a[j] > temp):
            a[j + 1] = a[j]
            j -= 1
        a[j + 1] = temp
    return a


#冒泡排序测试
nums = [32, 31, 29, 26, 20, 24, 35, 6, 25, 39]
print("sort before:")
print(nums)
nums = insertSort(nums)
print("sort after:")
print(nums)
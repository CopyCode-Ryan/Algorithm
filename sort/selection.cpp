#include <iostream>
using namespace std;

//选择排序
void selection(int a[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (a[i] > a[j])
            {
                int temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
}

void output(int a[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << a[i] << " ";
    }
    cout << endl;
}

int main()
{
    int a[] = {32, 31, 29, 26, 20, 24, 35, 6, 25, 39};
    cout << "sort before:" << endl;
    output(a, 10);
    selection(a, 10);
    cout << "sort after:" << endl;
    output(a, 10);
    return 0;
}
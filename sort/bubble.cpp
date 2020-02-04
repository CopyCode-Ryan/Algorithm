#include <iostream>
using namespace std;

void bubble(int a[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - 1; j++)
        {
            if (a[j] > a[j + 1])
            {
                swap(a[j], a[j + 1]);
            }
        }
    }
}

void output(int a[], int n)
{
    for (int i = 0; i < 10; i++)
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
    bubble(a, 10);
    cout << "sort after:" << endl;
    output(a, 10);
    return 0;
}
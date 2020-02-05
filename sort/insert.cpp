#include <iostream>
using namespace std;

void insertSort(int a[], int n) {
    for(int i = 0; i < n; i++) {
        int j = i - 1;
        int temp = a[i];
        while(j > -1 && a[j] > temp) {
            a[j + 1] = a[j];
            j --;
        }
        a[j + 1] = temp;
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

int main() {
    int a[] = {32, 31, 29, 26, 20, 24, 35, 6, 25, 39};
    cout << "sort before:" << endl;
    output(a, 10);
    insertSort(a, 10);
    cout << "sort after:" << endl;
    output(a, 10);
    return 0;
}
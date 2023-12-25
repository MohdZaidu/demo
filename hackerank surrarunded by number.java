#include <stdio.h>

int main()
{
    int n=9;
    int size=2*n-1;
    for(int i=0;i<(size/2)+1;i++)
    { int r;
        for(int k=0;k<size;k++)     //for half matrix
        { //printf("k=%d",k);
            if(k<=i)
            {   r=n-k;
                printf("%d ",r);
            //f++;
            }
            else if(k<=size-i-1)
            {
             printf("%d ",r);
            
              //  f++;
            }
       else
        {
           printf("%d ",++r);
        }
        }
        printf("\n");
    }
    
    
    for(int i=0;i<size/2;i++)       //for second half matrix
    {
        for(int j=0;j<size;j++)
        {int e;
            if(j<size/2-i)
            {    e=n-j;
            
                printf("%d ",e);
            }
            else if(j<=size/2+i)
            
            {
            printf("%d ",e);
            }
            else
            {
                printf("%d ",e++);
            }
        }
    
        printf("\n");
    }
    
}

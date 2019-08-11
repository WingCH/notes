# Deadlock

## 處理程序(Process)與資源(Resource)的關係

```flow
op1=>operation: 申請(Request)
op2=>operation: 使用(Use)
op3=>operation: 釋放(Release) 
op1->op2->op3
```

-------


### Deadlock必要的四個條件

1.  互斥(Mutual Exclusion) - java synchronized method          
2.  Hold and wait - 同一時間 Hold **Resource** and wait **Resource** 
3.  No Preemption
4.  Circular wait - 有cycle (資源分配圖)






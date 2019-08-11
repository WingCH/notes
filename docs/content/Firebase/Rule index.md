# Rule index


![-w672](./media/15546952658682/15546953271391.jpg)

> 我想用id搵番個class

![-w785](./media/15546952658682/15546954341973.jpg)


> 原本

![-w1392](./media/15546952658682/15546955622250.jpg)

```json
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    "Classes":{
      ".indexOn": ["id"]
    },
    ".read": true,
    ".write": true
  }
}
```
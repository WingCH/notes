# Android佈局-BottomNavigationView+ViewPager+Fragment

> 教學: https://tomoya92.github.io/2017/04/05/android-bottomnavigationview-viewpager-fragment/

> 自己做完: https://github.com/WingCH/BottomNavigationView_ViewPager_Fragment

### 注意事項：
1. **創建佈局** -> ~~LinearLayout~~ `ConstraintLayout` (用任何layout都得)
2. 自動生成既Fragment預設會有好多野，全部刪除，只要
```java
import...
public class Home extends Fragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_home, container, false);
    }
}
```
1. ~~修改menu/navigation.xml文件~~ -> `res/menu/bottom_nav_menu.xml`
2. **Error:** `Failed resolution of: xxxx`
[解決方法](https://www.jianshu.com/p/b805d18aa86f) 保持版本一致

```json
<!--app/build.gradle-->
...

dependencies {
    ...
    implementation 'com.android.support:appcompat-v7:28.0.0'
    implementation 'com.android.support:design:28.0.0'
    ...
}
```



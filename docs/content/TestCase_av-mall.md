# Test Case

已有User jason.chan@onepagehk.com

### Receive point
> add point

```
'email' => 'jason.chan@onepagehk.com',
'transaction_id' => 'transaction_id_01',
'point' => '1010',

```

**Responce**

```json
MPoLgrXg6UGVAOykak/WMADm1q5vjGOecvAPnRQ6XwF4fmQBy98LUyk1igGWdsDGLHs/neVv8rs5rpkhppw/jw==

{
    "return_flag": "1",
    "return_err": "",
    "goto": "net"
}
```

### Transaction query

> Query transaction records

```
'email' => 'jason.chan@onepagehk.com',
'transaction_id' => 'transaction_id_01'

VsyHMJLc28aIU+zc30AjonIU/8jayvToUSNUmHRaiiSIc+l7BJDRI3lEd6xSyuBqraEzHSOCfBvkPXzVLNPngamXjnTanKmWsn0+iQJ7qf8=
```

**Responce**

```json
MPoLgrXg6UGVAOykak/WMADm1q5vjGOecvAPnRQ6XwHfTL+Ovm6xbGDloDspgnMJcoOZZ787mTkVBWtAqcTXTcDU7MPNxfRY8J0xgFbu1kjq6A5npK/aEieMLLblSAF8gYNy5AjeaE/dT4OIPC1XvQ==

{
    "return_flag": "1",
    "return_err": "",
    "transaction_status": "1",
    "transaction_point": "1010",
    "goto": "net"
}
```
-----

#### Use same `transaction_id` add point

```
'email' => 'jason.chan@onepagehk.com',
'transaction_id' => 'transaction_id_01',
'point' => '1010',

```

**Responce**
```json

{
    "return_flag": "0",
    "return_err": "[\"The transaction id has already been taken.\"]",
    "goto": "net"
}
```

-------

#### add `999999999999999` point'

```
'email' => 'jason.chan@onepagehk.com',
'transaction_id' => 'transaction_id_02',
'point' => '999999999999999',
```

```json
{
    "return_flag": "0",
    "return_err": "[\"The point may not be greater than 99999999.\"]",
    "goto": "net"
}
```

-------

#### Use wrong `encryption code` add point or search record

![](media/15692263724996.jpg)
```json
{
    "return_flag": "0",
    "return_err": "Could not decrypt the data.",
    "goto": "net"
}
```

![](media/15692264268114.jpg)
```json
{
    "return_flag": "0",
    "return_err": "Server error, please contact avenuemall",
    "transaction_status": "0",
    "transaction_point": "",
    "goto": "net"
}
```

---

#### User `non-member` email add point or search record

##### add point
```
'email' => 'abc@onepagehk.com',
'transaction_id' => 'transaction_id_02',
'point' => '2019',
```

```json
{
    "return_flag": "0",
    "return_err":"[\"The selected \電\郵 is invalid.\"]",
    "goto": "net"
}
```

##### search record

```
'email' => 'abc@onepagehk.com',
'transaction_id' => 'transaction_id_02'
```

```json
{
    "return_flag": "0",
    "return_err":"[\"The selected \電\郵 is invalid.\",\"The selected transaction id is invalid.\"]",
    "transaction_status": "0",
    "transaction_point": "",
    "goto": "net"
}
```


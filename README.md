### Task : Make candle-chart from KorbitAPI

Target:
https://www.korbit.co.kr/markets/?market=btc-krw

API Source:
https://api.korbit.co.kr/v1/ticker/detailed/all


### Back-end : Database Operation

    - [V] Setting develop-Database Tools : Mysql
    - [V] Create Database Table
    - [V] Insert Mock-up data
    
    - [V] Setting Environment : Typescript, QraphQL, Axios, etc...
    - [V] Calling data based on Korbit API
    - [V] Auto calling & inserting API data into the table (Interval: minute)


### Front-end : Customer Web Page
    - [V] Setting develop-Environment : Typescript & Javascript, React, (HTML, CSS,) etc...
    - [V] Mock-up Directory-structure
    - [V] Layout : Header, Body, Footer
    - [V] Layout : Body division ( left / right )
    - [ ] get Component
        - [V] DataBox - get mock_up Database
        - [V] Button
        - [V] Chart
            Internet blog data: https://lasdri.tistory.com/810
    

### Middle Ware : Web-Back Operation Tool
    - [V] Construct dataLogic
        - [V] timestamp, high, low, open, close : getData => make arrayData

    - [V] function : 30minData, (dayData), (monthData), etc...
    - [V] function : showData (use hourData or dayData or ...)
    - [V] Connect link : Currency_pair - Data
        - [V] DatabaseFunction : select
        - [V] button link : division Currency_pair (BTC, ETH, XRP, ...)
        - [V] view chart
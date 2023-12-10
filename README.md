mimicDatabase.json = mimic of the database call json return as there isnt one for this specification

mui install is causing an error - can see its in node_modules\@mui\x-charts\models\seriesType\pie.d.ts file in the value type, but i cannot change that. Fix I believe is to just change that to value: string | number. It also doesn't allow for the fixed values I am passing to show as 2dp. If this wasn't a third party it would again be something I would delve into.

external installs used:
@emotion/styled
@emotion/react
@mui/x-data-grid
@mui/x-charts

Testing:
I have not written in JEST before but I have written PEST so I was going to implement some testing as part of this. As I was running through the first very basic levels (checking things rendered), I was getting failure notices from the mui libraries that I have mentioned previously. As this was a rapid prototype tech test, I have decided to not carry on as I think at this point I would need to find a different library - if you would like me to do this so I can demonstrate testing, please let me know and I will try and find a different solution. 

Please can I request feedback, good and/or bad, so that I can continue to grow and develop my react and typescript skills.

Thank you.
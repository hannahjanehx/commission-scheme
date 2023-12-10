mimicDatabase.json = mimic of the database call json return as there isnt one for this specification

mui install is causing an error - can see its in node_modules\@mui\x-charts\models\seriesType\pie.d.ts file in the value type, but i cannot change that. Fix I believe is to just change that to value: string | number. It also doesn't allow for the fixed values I am passing to show as 2dp. If this wasn't a third party it would again be something I would delve into.

external installs used:
@emotion/styled
@emotion/react
@mui/x-data-grid
@mui/x-charts
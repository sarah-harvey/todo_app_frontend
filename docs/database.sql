
+----------------------+
| Tables_in_todo_today |
+----------------------+
| task                 |
| user                 |
+----------------------+


+--------+
| userId |
+--------+
|      1 |
|      2 |
|      3 |
|      4 |
|      5 |
+--------+
current

+--------------------------------------+-----------+-----------------------------------+--------+
| taskId                               | completed | text                              | userId |
+--------------------------------------+-----------+-----------------------------------+--------+
| 0c1b3c0f-5a74-467e-8bfc-a936c5ff2adb |         0 | Book new piercing for birthday    |      1 |
| 330371d1-3157-48cd-8de1-5dc44f473269 |         0 | Call Ryan Reynolds back           |      1 |
| 49015aa4-6a48-4998-9cb0-97ee60a7cca7 |         1 | Book haircut in time for birthday |      1 |
| 512f3f1f-ba63-410e-a096-b6053e9e364a |         1 | Post letter to solicitor          |      1 |
| 712f06b2-31a5-4c04-9492-da78704851df |         0 | Order 4 bottles of gin            |      1 |
| cc679118-b45b-4393-96fe-913278e3a9f7 |         1 | Buy more calpol                   |      1 |
+--------------------------------------+-----------+-----------------------------------+--------+

original
+--------------------------------------+-----------+-----------------------------------+--------+
| taskId                               | completed | text                              | userId |
+--------------------------------------+-----------+-----------------------------------+--------+
| 330371d1-3157-48cd-8de1-5dc44f473269 | false     | Call Ryan Reynolds back           |      1 |
| 49015aa4-6a48-4998-9cb0-97ee60a7cca7 | true      | Book haircut in time for birthday |      1 |
| 512f3f1f-ba63-410e-a096-b6053e9e364a | true      | Post letter to solicitor          |      1 |
| 593f869d-9d83-4c4d-b7b3-d9919db66933 | false     | Order six bottles of gin          |      1 |
| 99161da1-1366-4376-9a5e-385d7da50f98 | true      | Buy flowers for mum               |      1 |
+--------------------------------------+-----------+-----------------------------------+--------+



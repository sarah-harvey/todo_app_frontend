mysql> show tables;
+----------------------+
| Tables_in_todo_today |
+----------------------+
| task                 |
| user                 |
+----------------------+

mysql> select * from user;
+--------+
| userId |
+--------+
|      1 |
+--------+
1 row in set (0.02 sec)

mysql> select * from task;
+--------------------------------------+-----------+-----------------------------------+--------+
| taskId                               | completed | text                              | userId |
+--------------------------------------+-----------+-----------------------------------+--------+
| 330371d1-3157-48cd-8de1-5dc44f473269 | false     | Call Ryan Reynolds back           |   NULL |
| 49015aa4-6a48-4998-9cb0-97ee60a7cca7 | true      | Book haircut in time for birthday |   NULL |
| 512f3f1f-ba63-410e-a096-b6053e9e364a | true      | Post letter to solicitor          |   NULL |
| 593f869d-9d83-4c4d-b7b3-d9919db66933 | false     | Order six bottles of gin          |   NULL |
| 99161da1-1366-4376-9a5e-385d7da50f98 | true      | Buy flowers for mum               |   NULL |
+--------------------------------------+-----------+-----------------------------------+--------+
5 rows in set (0.02 sec)


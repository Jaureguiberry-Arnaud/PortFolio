LOG: code_log, created_at
PROJECT: code_project, name, description
USERS: code_users, pseudo, password, role

:
BELONG, 0N PROJECT, 11 LOG
OWN, 0N USERS, 11 PROJECT
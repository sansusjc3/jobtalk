#!/bin/bash
sudo echo '172.17.0.4        master1' >> /etc/hosts
sudo echo '172.17.0.5        worker1' >> /etc/hosts
sudo echo '172.17.0.6        worker2' >> /etc/hosts
python manage.py runserver --noreload

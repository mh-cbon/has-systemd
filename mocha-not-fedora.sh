vagrant up ubuntu
vagrant ssh ubuntu -c "sh /vagrant/run-tests-not-fedora.sh"
vagrant halt ubuntu

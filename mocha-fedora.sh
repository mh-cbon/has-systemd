vagrant up fedora
vagrant ssh fedora -c "sh /vagrant/run-tests-fedora.sh"
vagrant halt fedora

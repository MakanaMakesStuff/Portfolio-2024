if [ ! -f ./.env.local ]; then
	cp .devcontainer/container.env ./.env.local
else
	echo ".env file exists, will not overwrite"
fi
cat << "EOF"

echo "
  _____         _______ ______   __  ____     __   _____ _    _  ____  ______ 
 |  __ \     /\|__   __|  ____| |  \/  \ \   / /  / ____| |  | |/ __ \|  ____|
 | |__) |   /  \  | |  | |__    | \  / |\ \_/ /  | (___ | |__| | |  | | |__   
 |  _  /   / /\ \ | |  |  __|   | |\/| | \   /    \___ \|  __  | |  | |  __|  
 | | \ \  / ____ \| |  | |____  | |  | |  | |     ____) | |  | | |__| | |____ 
 |_|  \_\/_/    \_\_|  |______| |_|  |_|  |_|    |_____/|_|  |_|\____/|______|
                                                                              
"

EOF
echo "Configuring SSH Keys & Git"
if [ -f ~/.ssh/id_rsa ]; then
	ssh-keyscan -H github.com >> ~/.ssh/known_hosts
	ssh git@github.com
	git config --global --add safe.directory /workspace
else
	echo "WARNING host provided no id_rsa..."
fi
cat << "EOF"
Don't forget to set your Git Config Details
git config --global user.name "FirstName LastName"
git config --global user.email "youremail@clublisi.com"
EOF
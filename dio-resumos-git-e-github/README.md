# Dio | Resumos Git e GitHub

Repositório para armazenar resumos sobre Git e GitHub do curso versionamento de código com Git e GitHub de [Digital Innovation One](https://www.dio.me)

## :open_file_folder: Documentação

- [Documentação Git](https://www.git-)









cd dio-angular/
elvas@elvas-HP-ProBook-4430s:~/dio/dio-angular$ git remote add
uso: git remote add [<options>] <name> <url>

    -f, --fetch           fetch the remote branches
    --tags                import all tags and associated objects when fetching
                          or do not fetch any tag at all (--no-tags)
    -t, --track <branch>  branch(es) to track
    -m, --master <branch>
                          master branch
    --mirror[=(push|fetch)]
                          set up remote as a mirror to push to or fetch from

elvas@elvas-HP-ProBook-4430s:~/dio/dio-angular$ git remote add origin https://github.com/felipeelvas/dio-Desenvolvimento-Frontend-com-Angular.git
elvas@elvas-HP-ProBook-4430s:~/dio/dio-angular$ cd .git
elvas@elvas-HP-ProBook-4430s:~/dio/dio-angular/.git$ cat config
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote "origin"]
	url = https://github.com/felipeelvas/dio-Desenvolvimento-Frontend-com-Angular.git
	fetch = +refs/heads/*:refs/remotes/origin/*

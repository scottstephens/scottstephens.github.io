remove-item -path ..\scottstephens.github.io\* -exclude .git -recurse
copy-item _site\* ..\scottstephens.github.io -recurse
git -C ..\scottstephens.github.io add --all
git -C ..\scottstephens.github.io commit -m "" --allow-empty-message
git -C ..\scottstephens.github.io push

#!/bin/sh

PARAMS=$(aws ssm get-parameters-by-path --path / --query "Parameters[*].{Name:Name,Value:Value}")
echo $PARAMS | jq -jr '.[]|.Name,"=",.Value,"\n"' > server/.env

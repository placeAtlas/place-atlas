#!/usr/bin/python

import re
pattern = re.compile(r'\[(.+?)\]\((.+?)\)')

def go(path):

  print(f"Fixing {path}...")

  with open(path, "r+", encoding='UTF-8') as f1:
    contents = f1.read()

  print("Stage 1 completed.")
  for match in pattern.finditer(contents):
    if match.group(1) == match.group(2):
      contents = contents.replace(match.group(0), match.group(2), 1)

  print("Stage 2 completed.")
  for match in pattern.finditer(contents):
    if match.group(1) == match.group(2):
      contents = contents.replace(match.group(0), match.group(2), 1)

  with open(path, "w", encoding='UTF-8') as f2:
    f2.write(contents)
  print("Writing completed. All done.")


go("../web/atlas.json")
go("../web/atlas-before-ids-migration.json")
##  docs/command-reference.md**

```markdown
# Command Reference

These are the supported WhatsApp commands for the automation:

---

## LIST `/FolderName`
**Description:** Lists all files inside the specified Google Drive folder.  
**Example:**  
```

LIST /ProjectX

```

---

## DELETE `/FolderName/FileName`
**Description:** Deletes the specified file.  
**Safety:** Requires confirmation for bulk deletes.  
**Example:**  
```

DELETE /ProjectX/report.pdf

```

---

## MOVE `/SourcePath/FileName /DestinationPath`
**Description:** Moves the specified file to another folder.  
**Example:**  
```

MOVE /ProjectX/report.pdf /Archive

```

---

## SUMMARY `/FolderName`
**Description:** Summarizes the content of each file (PDF/DOCX/TXT) in the folder using AI.  
**Example:**  
```

SUMMARY /ProjectX

```

---

## HELP
**Description:** Lists all available commands and usage examples.
**Example:**  
```

HELP

```


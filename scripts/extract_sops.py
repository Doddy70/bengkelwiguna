import os
import pypdf

sop_dir = "/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna/bengkel-wiguna-nextjs/SOP BENGKEL WIGUNA"
out_file = "/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna/conductor/business-knowledge.md"

# Ensure conductor directory exists
os.makedirs(os.path.dirname(out_file), exist_ok=True)

with open(out_file, "w", encoding="utf-8") as f_out:
    f_out.write("# Bengkel Wiguna Business Knowledge Base\n\n")
    f_out.write("This document contains the consolidated Standard Operating Procedures (SOPs) and Service lists for Bengkel Wiguna.\n\n")
    
    # Read the markdown file first
    md_path = os.path.join(sop_dir, "LAyanan_Bengkel.md")
    if os.path.exists(md_path):
        f_out.write("## Daftar Layanan Bengkel\n\n")
        with open(md_path, "r", encoding="utf-8") as f_md:
            f_out.write(f_md.read())
        f_out.write("\n\n---\n\n")
        
    # Read all PDFs
    for filename in sorted(os.listdir(sop_dir)):
        if filename.endswith(".pdf"):
            filepath = os.path.join(sop_dir, filename)
            try:
                reader = pypdf.PdfReader(filepath)
                text = ""
                for page in reader.pages:
                    extracted = page.extract_text()
                    if extracted:
                        text += extracted + "\n"
                
                f_out.write(f"## {filename.replace('.pdf', '')}\n\n")
                f_out.write(text.strip())
                f_out.write("\n\n---\n\n")
                print(f"Extracted {filename}")
            except Exception as e:
                print(f"Error reading {filename}: {e}")

print("Extraction complete.")

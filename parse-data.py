import json

# Function to process the input data
def parse_file_to_json(content):
    items = []
    current_slot = None
    current_class = None
    current_subtype = None

    # Iterate through each line
    for line in content.splitlines():
        line = line.strip()

        if len(line) == 0 or line[0] == '#':
            continue

        # Identify the slot section
        if line.endswith(":"):
            current_slot = line[:-1]
            continue

        # Identify the class section
        if line.endswith("1"):
            current_class = line.split(" ")[0]
            continue

        # Identify the subtype section
        if not "-" in line and line:
            current_subtype = line
            continue

        # Parse item entries with ID
        if " - " in line:
            item_name, item_id = map(str.strip, line.split(" - "))
            is2H = "_2H_" in item_id  # Determine if it's a two-handed item

            if current_slot != 'Main Hand' and current_slot != 'Off Hand':
                current_subtype = ''

            # Create an item object
            item = {
                "id": item_id,
                "name": item_name,
                "slot": current_slot,
                "is2H": is2H,
                "class": current_class,
                "subtype": current_subtype
            }
            items.append(item)

    return items

# Generate the JSON array from the file content
parsed_items = parse_file_to_json(open('albion-items.txt', 'r').read())

# Convert to JSON string for pretty printing
parsed_json = json.dumps(parsed_items, indent=2)
print(parsed_json)

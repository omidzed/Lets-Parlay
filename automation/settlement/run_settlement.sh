#!/bin/bash

# Navigate to settlement directory
cd /path/to/your/project/automation/settlement

# Compile TypeScript
npx tsc

# Run the settlement process
node dist/settlement.js

# Log execution
echo "Settlement process executed on $(date)" >> execution.log

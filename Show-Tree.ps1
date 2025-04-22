<#
.SYNOPSIS
  Recursively prints the directory tree up to a given depth,
  excluding specified folders.

.PARAMETER MaxDepth
  How many levels deep to traverse (default: 2).
#>
param(
  [int]$MaxDepth = 2
)

function Show-Tree {
  param(
    [string]$Path,
    [int]$Level = 0
  )

  if ($Level -gt $MaxDepth) { return }

  Get-ChildItem -Path $Path | ForEach-Object {
    # Skip excluded folders
    if ($_.PSIsContainer -and $_.Name -in 'node_modules','out','.next') {
      return
    }

    # Print this item with indentation
    $indent = ' ' * ($Level * 2)
    Write-Host "$indent$($_.Name)"

    # Recurse into subfolders
    if ($_.PSIsContainer) {
      Show-Tree -Path $_.FullName -Level ($Level + 1)
    }
  }
}

# Run against the current directory
Show-Tree -Path (Get-Location).Path -Level 0
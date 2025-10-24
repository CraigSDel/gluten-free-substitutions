import { Recipe } from "../types";

export class ExportService {
  static exportAsText(recipe: Recipe): string {
    let text = `# ${recipe.title}\n\n`;

    text += `**Servings:** ${recipe.servings}\n`;
    text += `**Prep Time:** ${recipe.prepTime} minutes\n`;
    text += `**Cook Time:** ${recipe.cookTime} minutes\n`;
    text += `**Difficulty:** ${recipe.difficulty}\n\n`;

    text += `## Ingredients\n`;
    recipe.ingredients.forEach((ingredient) => {
      const substitution = ingredient.substitutions[0];
      if (substitution) {
        text += `- ${ingredient.amount} ${ingredient.unit} ${substitution.substituteIngredient} (substituted for ${ingredient.name})\n`;
      } else {
        text += `- ${ingredient.amount} ${ingredient.unit} ${ingredient.name}\n`;
      }
    });

    text += `\n## Instructions\n`;
    recipe.instructions.forEach((instruction, index) => {
      text += `${index + 1}. ${instruction}\n`;
    });

    if (recipe.substitutions.length > 0) {
      text += `\n## Substitution Notes\n`;
      recipe.substitutions.forEach((substitution) => {
        text += `- **${substitution.originalIngredient}** → **${substitution.substituteIngredient}** (${substitution.ratio}:1 ratio)\n`;
        text += `  ${substitution.cookingNotes}\n`;
      });
    }

    text += `\n---\n*Converted using GlutenFree Substitutions*`;

    return text;
  }

  static exportAsPDF(recipe: Recipe): void {
    // For now, we'll use the browser's print functionality
    // In a real implementation, you'd use a library like jsPDF
    const text = this.exportAsText(recipe);
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${recipe.title}</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              h1 { color: #eab308; }
              h2 { color: #22c55e; margin-top: 20px; }
              .substitution { background-color: #fef3c7; padding: 10px; margin: 10px 0; border-radius: 5px; }
            </style>
          </head>
          <body>
            <pre>${text}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }

  static copyToClipboard(recipe: Recipe): Promise<void> {
    const text = this.exportAsText(recipe);
    return navigator.clipboard.writeText(text);
  }
}

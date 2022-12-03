const SUPABASE_URL = 'https://vqqpenhwkjtsmcuxcdwc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxcXBlbmh3a2p0c21jdXhjZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4NjM1MTIsImV4cCI6MTk4NTQzOTUxMn0.5yUTowMY1txospa9eXlhIRX_1AT7xYNbmSU2Ia9ZTPc';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getRecipes() {
    const response = await client.from('recipes').select();
    return response.data;
}

export async function getRecipeById() {}

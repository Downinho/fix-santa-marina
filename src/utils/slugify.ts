export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/--+/g, '-') // Remove hífens duplos
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove hífens do início e fim
}

export function getVesselSlug(vessel: { id: number; name: string }): string {
  return `${createSlug(vessel.name)}-${vessel.id}`;
}

export function extractIdFromSlug(slug: string): number | null {
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart, 10);
  return isNaN(id) ? null : id;
}
//let items = [];
export function obtenerItems() {
    return comunicados;
}

export var comunicados = [];

export async function establecerItems(folder) {
  comunicados = folder;
}

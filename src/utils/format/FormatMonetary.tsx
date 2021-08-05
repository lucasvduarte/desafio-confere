export const valueMonetary = (value: number): string => {
    let valueAux: string = value.toFixed(2).replace('.', '.');

    return `${parseFloat(valueAux).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} `;
}
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { calculateValue } = require('../script.js');

test('Validação de integridade dos arquivos do projeto', () => {
    assert.ok(fs.existsSync(path.resolve(__dirname, '../index.html')), 'index.html deve existir');
    assert.ok(fs.existsSync(path.resolve(__dirname, '../style.css')), 'style.css deve existir');
    assert.ok(fs.existsSync(path.resolve(__dirname, '../script.js')), 'script.js deve existir');
});

test('Validação do conteúdo HTML', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
    assert.ok(html.includes('id="screen"'), 'Campo de tela (screen) deve existir no HTML');
    assert.ok(html.includes('script.js'), 'script.js deve estar importado no HTML');
    assert.ok(html.includes('style.css'), 'style.css deve estar importado no HTML');
});

test('Validação da lógica de cálculo aritmético', () => {
    assert.strictEqual(calculateValue('2+2'), 4, 'Soma simples (2+2) deve resultar em 4');
    assert.strictEqual(calculateValue('10-3'), 7, 'Subtração (10-3) deve resultar em 7');
    assert.strictEqual(calculateValue('6*7'), 42, 'Multiplicação (6*7) deve resultar em 42');
    assert.strictEqual(calculateValue('20/4'), 5, 'Divisão (20/4) deve resultar em 5');
    assert.strictEqual(calculateValue(''), 0, 'Expressão vazia deve retornar 0');
});

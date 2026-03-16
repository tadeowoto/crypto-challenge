# 📋 Challenge Técnico: Crypto Dashboard React

## 🎯 Objetivo

Desarrollar una aplicación funcional en **React** que permita visualizar el estado del mercado de criptomonedas en tiempo real. Este desafío pone a prueba el manejo de asincronía, estados dependientes y optimización del ciclo de vida de los componentes.

---

## 🛠️ Requerimientos Funcionales

### 1. Listado de Mercado (Petición Principal)

- Consumir la API de **CoinGecko** para obtener el Top 10 de monedas por capitalización de mercado.
- Renderizar una tabla o lista que incluya:
  - Icono, Nombre y Símbolo de la moneda.
  - Precio actual en USD (formateado: `$ 0.00`).
  - Variación porcentual de las últimas 24h.

### 2. Lógica de UI y Tendencias

- Implementar un sistema de colores condicional para la variación de precio:
  - **Verde**: Variación positiva ($\ge$ 0%).
  - **Rojo**: Variación negativa (< 0%).
- Formatear los precios utilizando la API nativa `Intl.NumberFormat`.

### 3. Flujo de Datos Dependiente (Master-Detail)

- Al hacer clic en una moneda de la lista, la aplicación debe detectar el cambio de selección y realizar una **segunda petición** a la API.
- Obtener y mostrar detalles adicionales de la moneda seleccionada (ej. descripción o precio máximo histórico) en una sección de detalle.

### 4. Actualización Automática (Polling)

- Implementar un sistema de refresco automático que actualice los precios cada **60 segundos**.
- Asegurar la limpieza del intervalo (`clearInterval`) al desmontar el componente para evitar fugas de memoria.

---

## ⚠️ Requerimientos Técnicos

1.  **Hooks**: Uso correcto de `useState` para el manejo de datos y `useEffect` para los efectos secundarios.
2.  **Asincronía**: Implementación de `fetch` o `axios` utilizando `async/await` con bloques `try/catch`.
3.  **UX Patterns**:
    - Mostrar estados de carga (`isLoading`).
    - Manejo de errores de API para evitar el colapso de la aplicación.
4.  **Clean Code**: Modularización de componentes y (preferentemente) uso de un **Custom Hook** para la lógica de datos.

---

## 🔗 Recursos de la API

- **Endpoint Lista (Top 10):**
- **Endpoint Detalle (por ID):**

---

## 🎨 Criterios de UX/UI (Plus)

- **Accesibilidad**: Uso de HTML semántico.
- **Responsiveness**: Tabla adaptable a dispositivos móviles.
- **Feedback**: Visualización clara de los estados de carga.

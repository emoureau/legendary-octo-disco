<template>
  <!--
    Geometric E lettermark + tracked wordmark.
    Uses currentColor so it inherits whatever text color the parent sets.
  -->
  <svg
    viewBox="0 0 118 22"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Editorial"
  >
    <!-- Geometric E: vertical stem + three horizontal bars (full / short / full) -->
    <rect x="0"  y="0"    width="3"  height="22" />
    <rect x="3"  y="0"    width="13" height="3"  />
    <rect x="3"  y="9.5"  width="9"  height="3"  />
    <rect x="3"  y="19"   width="13" height="3"  />

    <!-- Thin separator rule -->
    <rect x="22" y="6"    width="1"  height="10" opacity="0.35" />

    <!-- Tracked uppercase wordmark -->
    <text
      x="29"
      y="16.5"
      font-family="system-ui, -apple-system, 'Helvetica Neue', sans-serif"
      font-size="11"
      font-weight="800"
      letter-spacing="2.8"
    >EDITORIAL</text>
  </svg>
</template>

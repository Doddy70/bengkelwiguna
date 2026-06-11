async function test() {
  const res = await fetch('https://backend.bengkelwiguna.com/wp-json/menus/v1/menus/menu-1');
  if (res.ok) {
     const data = await res.json();
     console.log('Plugin API Menu:', data);
  } else {
     console.log('Plugin API Menu Failed:', res.status);
  }
}
test();

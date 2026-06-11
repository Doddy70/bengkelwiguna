async function test() {
  const res = await fetch('https://backend.bengkelwiguna.com/wp-json/bw/v1/menu/menu-1');
  if (res.ok) {
     const data = await res.json();
     console.log('BW API Menu:', data);
  } else {
     console.log('BW API Menu Failed:', res.status);
  }
}
test();

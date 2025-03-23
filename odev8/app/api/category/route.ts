const categories = [
  {
    id: 1,
    name: "Elektronik",
    description: "Elektronik cihazlar ve aksesuarlar",
  },
  {
    id: 2,
    name: "Giyim",
    description: "Kadın, erkek ve çocuk giyim ürünleri",
  },
  {
    id: 3,
    name: "Ev & Dekorasyon",
    description: "Ev mobilyaları ve dekoratif ürünler",
  },
  {
    id: 4,
    name: "Spor & Outdoor",
    description: "Spor malzemeleri ve outdoor ürünleri",
  },
  {
    id: 5,
    name: "Kitaplar",
    description: "Roman, bilim ve sanat kitapları",
  },
];

export async function GET() {
  return new Response(JSON.stringify(categories), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.name || !body.description)
    return new Response(
      JSON.stringify({ error: "Name ve description alanı zorunludur." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );

  const newCategory = {
    id: categories.length + 1,
    name: body.name,
    description: body.description,
  };

  categories.push(newCategory);

  return new Response(
    JSON.stringify({
      message: "Kategori başarıyla eklendi",
      product: newCategory,
    }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function PUT(req: Request) {
  const body = await req.json();
  const id = body.id;
  const category = categories.find((category) => category.id == id);
  if (!category)
    return new Response(JSON.stringify({ error: "Kategori bulunamadı" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });

  category.name = body.name;
  category.description = body.description;

  return new Response(
    JSON.stringify({ message: "Kategori başarıyla güncellendi", category }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const id = body.id;
  const categoryIndex = categories.findIndex((category) => category.id == id);
  if (categoryIndex === -1)
    return new Response(JSON.stringify({ error: "Kategori bulunamadı" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });

  categories.splice(categoryIndex, 1);

  return new Response(
    JSON.stringify({ message: "Kategori başarıyla silindi" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

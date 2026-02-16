type SchemaJsonLdProps = {
  data: object[];
};

export function SchemaJsonLd({ data }: SchemaJsonLdProps) {
  return (
    <>
      {data.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

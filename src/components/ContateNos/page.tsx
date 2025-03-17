import { FontOswald } from "@/src/utils/util";
import CustomButton from "../Standard/Button";

export default function ContateNos() {
    return (
        <section className={`bg-[#F5F5F5] py-48 flex ${FontOswald.className}`}>
            <div className="flex flex-col w-1/2 px-28 gap-10">
                <h2 className="text-4xl">CONTATE-NOS</h2>
                <hr className="border-2 border-amarelo_Mostarda w-32" />
                <p className="text-lg font-extralight">Contate-nos da forma mais conveniente para você. Você também pode usar um formulário de contato rápido abaixo ou visitar nosso escritório pessoalmente.</p>
                <form action="" className="flex flex-col gap-10 text-[#333333] w-full">
                    <div className="gap-10 flex w-full">
                        <span className="flex flex-col gap-2 w-full">
                            <label className="font-extralight" htmlFor="input">Nome</label>
                            <input type="text" className="p-3 rounded-3xl" />
                        </span>

                        <span className="flex flex-col gap-2 w-full">
                            <label className="font-extralight" htmlFor="input">Sobrenome</label>
                            <input type="text" className="p-3 rounded-3xl" />
                        </span>
                    </div>

                    <div className="gap-10 flex w-full">
                        <span className="flex flex-col gap-2 w-full">
                            <label className="font-extralight" htmlFor="input">Telefone</label>
                            <input type="text" className="p-3 rounded-3xl" />
                        </span>

                        <span className="flex flex-col gap-2 w-full">
                            <label className="font-extralight" htmlFor="input">E-mail</label>
                            <input type="text" className="p-3 rounded-3xl" />
                        </span>
                    </div>

                    <textarea className="w-full rounded-3xl" rows={6}></textarea>
                    <CustomButton
                        backgroundColor="#ec7f24"
                        color="#fff"
                        text="ENVIAR MENSAGEM"
                        classname="flex justify-center"
                    />
                </form>
            </div>
            <iframe className="w-1/2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.1985040668087!2d-53.48694482389573!3d-24.95936007786493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d69c20f0e86f%3A0x1e38ae99fcd6f086!2sTurismovan%20%7C%20Loca%C3%A7%C3%A3o%20de%20Van%20para%20Turismo!5e0!3m2!1spt-BR!2sbr!4v1742203378925!5m2!1spt-BR!2sbr" width="800" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}
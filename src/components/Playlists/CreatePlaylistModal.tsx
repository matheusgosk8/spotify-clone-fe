'use client';

import React, { useState, useEffect, useRef } from 'react';

type Props = {
  fechar: () => void;
  onCreate: (title: string, description: string, publicFlag: boolean, collaborative: boolean) => void;
};

const CreatePlaylistModal = ({ fechar, onCreate }: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [publicFlag, setPublicFlag] = useState(true);
  const [collaborative, setCollaborative] = useState(false);
  const [error, setError] = useState('');
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fechar]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) fechar();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '') {
      setError('O título não pode ficar vazio');
      return;
    }
    onCreate(title, description, publicFlag, collaborative);
  };

  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="fixed inset-0 flex justify-center items-center bg-black/80 z-50"
      onClick={handleOverlayClick}
      ref={divRef}
    >
      <div className="relative w-full max-w-md mx-4 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col p-6 gap-4">
        <h2 className="text-xl font-semibold">Criar nova playlist</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Título */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Título da playlist"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (error) setError('');
              }}
              className={`w-full p-2 rounded bg-gray-800 border ${
                error ? 'border-red-500' : 'border-gray-700'
              } focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </div>

          {/* Descrição */}
          <textarea
            placeholder="Descrição (opcional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            rows={3}
          />

          {/* Switches estilo toggle */}
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center justify-between">
              <span>Pública</span>
              <button
                type="button"
                onClick={() => setPublicFlag((prev) => !prev)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  publicFlag ? 'bg-green-500' : 'bg-gray-700'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    publicFlag ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span>Colaborativa</span>
              <button
                type="button"
                onClick={() => setCollaborative((prev) => !prev)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  collaborative ? 'bg-green-500' : 'bg-gray-700'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    collaborative ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Botões */}
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={fechar}
              className="primary-button !px-5 !py-1 !bg-gray-700"
            >
              Cancelar
            </button>
            <button type="submit" className="primary-button !px-5 !py-1">
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
